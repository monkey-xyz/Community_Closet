const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const pictureRoutes = require('./pictureRoutes');


router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/pictures', pictureRoutes);

module.exports = router;