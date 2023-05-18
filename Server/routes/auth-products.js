// require necessary controllers
const { createProduct, deleteProduct, updateProduct } = require('../controllers/general');

const express = require('express');
const router = express()



const path = require('path');

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      const fileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });
  
  // Multer upload configuration
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      const allowedExtensions = [".jpg", ".jpeg", ".png", ".jfif"];
      const ext = path.extname(file.originalname).toLowerCase();
      if (!allowedExtensions.includes(ext)) {
        return cb(new Error("Please upload a valid image file"));
      }
      cb(null, true);
    },
    limits: {
      fileSize: 20000000, // 20MB file size limit
    },
  });
  









router.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.json({ message: "File uploaded successfully" });
  });

// product related authentiacated routes
router.route('/create').post(upload.single("image"),createProduct) // create new entry in database
router.route('/update/:id').patch(updateProduct) // update existing entry
router.route('/delete/:id').delete(deleteProduct) // delete exiting entry


// export router
module.exports = router
