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
  res.send(uploadedImage);
});

// Post route for table? Link the Picture model up to a post_id. Put route maybe?

// router.post ('/', async (req, res) => {
//     try {
//         const pictureData = await Picture.findAll({
//             include: [
//                 {
//                     model: Post,
//                 },
//             ],
//         });

//         res.status(200).json(pictureData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// router.get("/", async (req, res) => {
//   try {
//     const pictureData = await Picture.findAll();
//     res.status(200).json(pictureData);
//   } catch (err) {
//     res.status(404).json(pictureData);
//   }
// });

module.exports = router;
