const { Comment } = require('../models');

const comments = [{
    id: 1,
    body: "lorem ipsum"
},
{
    id: 2,
    body: "lorem ipsum"
}]

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;