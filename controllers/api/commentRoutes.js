const router = require('express').Router();
const { Comment, User } = require ('../../models');

// Create a post route for comments to be created on a respective post. Maybe add delete route?

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            include:
            {
                model: User,
            },
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(404).json(commentData);
    }
});

module.exports = router;