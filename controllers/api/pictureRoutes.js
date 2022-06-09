const router = require("express").Router();
const { Picture, Post } = require("../../models");
const Auth = require("../../utils/auth");
const upload = require("../../s3");

router.post("/upload", upload.single("upl"), async function (req, res, next) {
  if (!req.file) {
    res.status(400).json({ Error: "Choose an image file" });
    return;
  }

  await Post.create({
    title: req.body["post-title"],
    img_url: req.file.location,
    description: req.body["description"],
    size: req.body["size"],
    location: req.body["location"],
  });
  res.redirect("/profile");
  console.log(req.file.location);
  console.log(req.body);
});

module.exports = router;
