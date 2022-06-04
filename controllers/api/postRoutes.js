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
                // include model: Pictures when that is created, eventually. attributes = blob info maybe?
            ],
        });
        res.status(200).json(ProductData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create Delete route to get rid of posts?

// Create a Put route to update existing posts?

router.post('/', )
module.exports = router;