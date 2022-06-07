const { Picture } = require('../models');

const pictures = [{
        post_id: 2,
        url: 'https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/leatherpants.jpg',
        id: 1
        
    }
];

const seedPictures = () => Picture.bulkCreate(pictures);

module.exports = seedPictures;