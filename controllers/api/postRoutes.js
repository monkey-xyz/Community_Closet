const router = require("express").Router();
const { Post, User } = require("../../models");
const Auth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create Delete route to get rid of posts?

// Create a Put route to update existing posts?

router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                id: req.params.ids,
            },
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
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


router.post("/");
module.exports = router;
