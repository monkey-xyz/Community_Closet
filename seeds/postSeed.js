const { Post } = require('../models');

const posts = [{
        title: 'Zombies!',
        description: 'Zombies reversus ab inferno, nam malum cerebro.',
        user_id: 1

    },
    {
        title: 'Opportunity',
        description: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.',
        user_id: 2
    },
    {
        title: 'Zombie Ipsum',
        description: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. ',
        user_id: 3
    },
    {
        title:"yarg",
        description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast.",
        user_id: 1
    }
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;