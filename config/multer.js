const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) { //attached with req.file object
        cb(null, './public')
    },
    filename: function (req, file, cb) { //creating our own filename attached with req.file object
        const ext = getExtension(file.originalname)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, getFileName(file.originalname) + '-' + uniqueSuffix + '.' + ext)
    }
})

var fileFilter = function (req, file, cb) {
    // var path = require('path');
    // var ext = path.extname(file.originalname);
    const  ext = getExtension(file.originalname)
    // console.log(ext.toLowerCase())
    //get extension of file
    if (file.mimetype !== 'text/csv' || ext.toLowerCase() != 'csv') {
        req.fileValidationError = 'goes wrong on the mimetype';
        return cb(null, false, new Error('goes wrong on the mimetype'));
    }
    cb(null, true);
};

function getExtension(filename) {
    return filename
        .split('.') 
        .pop(); //removes the first element from array
}
function getFileName(filename) {
    return filename
        .split('.')[0]; //removes the first element from array
}
const multerUploader = multer({storage: storage, fileFilter: fileFilter});

module.exports = multerUploader;