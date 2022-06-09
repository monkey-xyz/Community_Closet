const router = require('express').Router();
const { Comment } = require ('../../models');
const Auth = require("../../utils/auth");

// Post comment
router.post('/', Auth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(404).json(commentData);
    }
});

module.exports = router;