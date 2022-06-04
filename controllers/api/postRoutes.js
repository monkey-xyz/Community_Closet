const router = require('express').Router();
const { Post, User } = require ('../../models');
const Auth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
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


router.post('/', )
module.exports = router;