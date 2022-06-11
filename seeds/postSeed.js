const { Post } = require('../models');

const posts = [{
        title: 'T-Shirt!',
        description: 'Zombies reversus ab inferno, nam malum cerebro.',
        location: 'Tacoma',
        size: 'Large',
        user_id: 1,
        img_url:"https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/1654901847969"

    },
    {
        title: 'Jeans',
        description: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis.',
        location: 'Auburn',
        size: 'Small',
        user_id: 2,
        img_url:"https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/1654901847969"
    },
    {
        title: 'Kids Jacket',
        description: 'Zombies reversus ab inferno, nam malum cerebro. De carne animata corpora quaeritis. ',
        location: 'SeaTac',
        size: 'Small',
        user_id: 3,
        img_url:"https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/1654901847969"
    },
    {
        title:"Shoes",
        description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast.",
        location: 'Bellevue',
        size: 'Medium',
        user_id: 1,
        img_url:"https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/1654901847969"
    }
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;