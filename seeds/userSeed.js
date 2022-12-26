const { User } = require("../models");

const userData = [
  {
    name: "tiffany7809",
    password: "budbasaur",
    email: "sample@sample.com",
    location: "",
    age: "",
  },
  {
    name: "JackSparrow",
    password: "whyistherumgone",
    email: "sample1@sample.com",
    location: "",
    age: "",
  },
  {
    name: "JoJo",
    password: "diooo",
    email: "sample2@sample.com",
    location: "",
    age: "",
  },
  {
    name: "Frodo",
    password: "hobbit",
    email: "sample3mys@sample.com",
    location: "",
    age: "",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
