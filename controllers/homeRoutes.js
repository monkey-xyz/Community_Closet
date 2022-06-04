const router = require("express").Router();
const { User, Post } = require("../models");
const Auth = require("../utils/auth");

// When server is ready, test the routes and update them with working code.
// 1st get route should return all posts for the page, 2nd should work as a singular post page, 3rd should provide the user profile. 4th should provide Login page upon use.

router.get("/", Auth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      // Update
    });

    const posts = postData.map((posts) => posts.get({ plain: true }));

    res.render("home", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post", {
      ...post,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", Auth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password", "email"] },
      include: [
        {
          model: Post,
        },
        //add Picture model when made
      ],
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
