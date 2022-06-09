const router = require("express").Router();
const { Post } = require("../../models");
const Auth = require("../../utils/auth");
const upload = require("../../s3");

router.post("/upload", upload.single("upl"), async function (req, res, next) {
  if (!req.file) {
    res.status(400).json({ Error: "Choose an image file" });
    return;
  }

  // const post_id = req.params.id;
  // const uploadedImage = `
  // <img src=${req.file.location} width="200px" />
  // `;
  
await Post.create( {
  title: req.body["post-title"],
  img_url: req.file.location,
  description: req.body["description"],
  size: req.body["size"],
  location: req.body["location"]

})
res.redirect('/profile')
console.log(req.file.location);
console.log(req.body);
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
