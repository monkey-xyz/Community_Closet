const router = require("express").Router();
const { Post } = require("../../models");
const Auth = require("../../utils/auth");

router.put("/:id", Auth, async (req, res) => {
  try {
    const postData = await Post.findByPk({
      where: {
        id: req.params.ids,
      },
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", Auth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", Auth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res
        .status(404)
        .json({ message: "No post matches this id. Maybe try again?" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.post("/upload", upload.array("upl", 25), function (req, res, next) {
//   res.send({
//     message: "Uploaded!",
//     urls: req.files.map(function (file) {
//       return {
//         url: file.location,
//         name: file.key,
//         type: file.mimetype,
//         size: file.size,
//       };
//     }),
//   });
// });

//PUT /api/posts/:id route (update a post)
router.put('/:id', Auth, (req, res) => {
  Post.update({
          title: req.body.title,
          description: req.body.description,
          location: req.body.location,
          size: req.body.size
      }, {
          where: {
              id: req.params.id
          }
      }).then(postData => {
          if (!postData) {
              res.status(404).json({ message: 'Sorry! No post was found with this id' });
              return;
          }
          res.json(postData);
      })
      .catch(err => {
          res.status(500).json(err);
      });
});


router.post("/");
module.exports = router;
