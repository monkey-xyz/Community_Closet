const router = require('express').Router();
const { Picture, Post } = require('../../models');
const Auth = require('../../utils/auth');

// Post route for table? Link the Picture model up to a post_id. Put route maybe?

router.post ('/', async (req, res) => {
    try {
        const imageData = await Picture.findAll({
            include: [
                {
                    model: Post,
                },
            ],
        });

        res.status(200).json(imageData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;