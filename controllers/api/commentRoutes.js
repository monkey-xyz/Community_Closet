const router = require('express').Router();
const { Comment } = require ('../../models');
const Auth = require("../../utils/auth");

// Create a post route for comments to be created on a respective post. Maybe add delete route?

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


//GET /api/comments/ route (get all comments)
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            res.status(500).json(err);
        })
});


//GET /api/comments/:id route (find comment by id)
router.get('/:id', (req, res) => {
    Comment.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(commentData => res.json(commentData))
        .catch(err => {
            res.status(500).json(err);
        })
});



module.exports = router;