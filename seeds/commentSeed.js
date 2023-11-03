const { Comment } = require('../models');

const comments = [{
    id: 1,
    post_id: 2,
    user_id: 3,
    body: "Adrian, email@gmail.com, please contact me if this item is still available!",
},
{
    id: 2,
    post_id: 3,
    user_id : 2,
    body: "Looks Awesome! Im interested!",
    
},
{
    id: 3,
    post_id: 4,
    user_id : 1,
    body: "When Can I Pick up this item?",
    
}]

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;