const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/images")
        },
    filename: (req, file, cb) => {
        const timetamp = new Date().getTime();
        const fileName = file.originalname.split('.')[0];
        const extention = path.extname(file.originalname);
        cb(null, `${timetamp}-${fileName}${extention}`);
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1024 * 1024,
    },

});

module.exports = upload;