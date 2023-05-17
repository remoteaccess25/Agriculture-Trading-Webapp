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
      fileSize: 1000000, // 1MB file size limit
    },
  });
  



  module.exports=upload