const multer = require('multer')
const multerUploader = require('../config/multer')
const upload = multerUploader.single('uploaded_file');


exports.fileUpload = (req, res ,next) => {
    
    
    upload(req, res, (err) => {
    
        if (err instanceof multer.MulterError) {
            return res.json([
                {
                    errors: err
                }
            ])
        } else if (err) {
            return res.json([
                {
                    errors: err
                }
            ])
        } else if (req.fileValidationError) {
            return res.json([
                {
                    errors: req.fileValidationError
                }
            ])
        }
        next()
    })

}