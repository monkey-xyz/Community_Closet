const router = require("express").Router();
const { Post, User } = require("../../models");
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
});

router.post("/");
module.exports = router;
