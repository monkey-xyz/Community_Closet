const { Comment } = require('../models');

const comments = [{
    id: 1,
    post_id: 2,
    user_id: 3,
    body: "lorem ipsum"
},
{
    id: 2,
    post_id: 3,
    user_id : 3,
    body: "lorem ipsum"
    
}]

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;