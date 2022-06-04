const router = require("express").Router();
const { Post } = require("../../models");
const Auth = require("../../utils/auth");

router.get("/", async (req, res) => {
  const TEST = "test";
});

//routes for s3

//put this into the post handlebars
//open in browser to see upload form
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html"); //index.html is inside node-cheat
});

//use by upload form
app.post("/upload", upload.array("upl", 25), function (req, res, next) {
  res.send({
    message: "Uploaded!",
    urls: req.files.map(function (file) {
      return {
        url: file.location,
        name: file.key,
        type: file.mimetype,
        size: file.size,
      };
    }),
  });
});

router.post("/");
module.exports = router;
