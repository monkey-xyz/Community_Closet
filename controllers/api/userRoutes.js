const router = require("express").Router();
const { User } = require("../../models");

//route that lets a user sign up
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

router.post("/login", async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (!userData) {
            res.status(400).json({
                message: "Email or password is incorrect. Please retry."
            });
            return;
        }

        const passwordCheck = await userData.checkPassword(req.body.password);

        if (!passwordCheck) {
          res.status(400).json({
            message: "Email or password is incorrect. Please retry."
          });
          return;
        }

        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;

          res.json({ user: userData, message: "Welcome back."})
        });

    } catch (err) {
        res.status(404).json(userData);
    }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
