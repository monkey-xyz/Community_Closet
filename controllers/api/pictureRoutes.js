const router = require("express").Router();
const { Post } = require("../../models");
const Auth = require("../../utils/auth");
const upload = require("../../s3");

router.post("/upload", Auth, upload.single("upl"), async function (req, res, next) {
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
    user_id: req.session.user_id,
  });
  
  res.redirect("/profile");
  console.log(req.file.location);
  console.log(req.body);
  console.log(req.session.user_id);
});

module.exports = router;