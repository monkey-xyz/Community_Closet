const router = require('express').Router();
const { User } = require('../../models')

router.post('/login', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    } catch (err) {
        res.status(404).json(userData);
    }

    // Update post route for creating a user. Check for email, password, etc.
});

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            exclude: [
                {
                    attributes: ['password'],
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