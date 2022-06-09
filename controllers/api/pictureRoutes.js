const router = require("express").Router();
const { Picture, Post } = require("../../models");
const Auth = require("../../utils/auth");
const upload = require("../../s3");

router.post("/upload", upload.single("upl"), function (req, res, next) {
  if (!req.file) {
    res.status(400).json({ Error: "Choose an image file" });
    return;
  }
  const uploadedImage = `
  <img src=${req.file.location} width="200px" />
  `;
  await Post.create({
    title: req.body["post-title"],
    img_url: req.file.location,
    description:req.body["description"],
    size: req.body["location"]

  })
  res.redirect('/profile')
});

module.exports = router;
