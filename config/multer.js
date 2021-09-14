const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) { 
        cb(null, './public')
    },
    filename: function (req, file, cb) { 
        const ext = getExtension(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, getFileName(file.originalname) + '-' + uniqueSuffix + '.' + ext)
    }
})

var fileFilter = function (req, file, cb) {

    const  ext = getExtension(file.originalname)

    if (file.mimetype !== 'text/csv' || ext.toLowerCase() != 'csv') {
        req.fileValidationError = 'goes wrong on the mimetype';
        return cb(null, false, new Error('goes wrong on the mimetype'));
    }
    cb(null, true);
};

function getExtension(filename) {
    return filename
        .split('.') 
        .pop();
}
function getFileName(filename) {
    return filename
        .split('.')[0]; 
}
const multerUploader = multer({storage: storage, fileFilter: fileFilter});

module.exports = multerUploader;