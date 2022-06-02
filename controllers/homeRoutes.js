const router = require('express').Router();
const { User, Post } = require('../models');
const Auth = require('../utils/auth');

router.get('/', Auth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            //
        });

        const dashPosts = postData.map((posts) =>
            posts.get()
        );

        res.render('profile', {
            //,
        });
    } catch (err) {
        res.json(err);
    }
});

router.get('/post/:id', async (req, res) => {

});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
})

module.exports = router;