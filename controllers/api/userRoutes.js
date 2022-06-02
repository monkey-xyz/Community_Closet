const router = require('express').Router();
const { User } = require('../../models')

router.post('/login', async (req, res) => {
    try {
        const userData = await User.create(req.body);
    } catch (err) {
        res.status(404).json(userData);
    }
});

module.exports = router;