const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./temp/profile");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const name = file.originalname.split(".");
    cb(null, name[0] + "-" + uniqueSuffix + `.${name[1]}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
