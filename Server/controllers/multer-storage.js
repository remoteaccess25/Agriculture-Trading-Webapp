  const path = require('path');

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./images')
    },
    filename: (req, file, cb) => {
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

const create = multer({ storage: storage })
    .single('productImage')

module.exports = create


