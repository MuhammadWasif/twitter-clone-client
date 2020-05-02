const multer = require("multer");

const path = require("path");
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, path.join(__dirname, "../uploads/"));
    //} else {
    //cb({ message: "this file is neither a video or image file" }, false);
    //}
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb({ message: "this file is not an image file" }, false);
  }
};

var upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
