const router = require('express').Router();
const { Picture, Post } = require('../../models');
const Auth = require('../../utils/auth');

// Post route for table? Link the Picture model up to a post_id. Put route maybe?

// router.post ('/', async (req, res) => {
//     try {
//         const pictureData = await Picture.findAll({
//             include: [
//                 {
//                     model: Post,
//                 },
//             ],
//         });

//         res.status(200).json(pictureData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

router.get('/', async (req, res) => {
    try {
        const pictureData = await Picture.findAll;
        res.status(200).json(pictureData);
    } catch (err) {
        res.status(404).json(pictureData);
    }
});

module.exports = router;