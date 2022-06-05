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

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      exclude: [
        {
          attributes: ["password"],
        },
      ],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(404).json(userData);
  }

router.post("/login", async (req, res) => {
    try {
        const userData = await User.create({
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

    } catch (err) {
        res.status(404).json(userData);
    }
});

router.get("/", async (req, res) => {
    try {
        const userData = await User.findAll({
            exclude: [
                {
                    attributes: ["password"],
                }
            ]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(404).json(userData);
    }
});

// Create post route for logging in. Check table for an existing user fulfilling the login info.

// Create post route for the logout.

module.exports = router;
