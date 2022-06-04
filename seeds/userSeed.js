const { User } = require('../models');

const userData = [{
        name: 'tiffany7809',
        password: 'budbasaur',
        email: "sample@sample.com"


    },
    {
        name: 'JackSparrow',
        password: 'whyistherumgone',
        email: "sample1@sample.com"

    },
    {
        name: 'JoJo',
        password: 'diooo',
        email: "sample2@sample.com"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;