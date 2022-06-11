const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

// Create an Amazon S3 service client object.
const s3 = new S3Client({
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    acl: "public-read",
    bucket: "community-closet-s3-bucket",
    key: function (req, file, cb) {
      console.log(file);
      cb(null, Date.now().toString()); //use Date.now() for unique file keys
    },
  }),
});

module.exports = upload;
