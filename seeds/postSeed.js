const { Post } = require("../models");

const posts = [
  {
    title: "Black Sweater",
    description: "Only worn once",
    location: "Tacoma",
    size: "XS",
    user_id: 1,
    img_url:
      "https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/blacks.jpg",
  },
  {
    title: "Two blue shirts",
    description: "One long-sleeved, one short-sleeved. Never worn. ",
    location: "SeaTac",
    size: "Medium",
    user_id: 2,
    img_url:
      "https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/category-tshirts.jpg",
  },
  {
    title: "Brown Khakis",
    description: "Originally from Gap, freshly ironed",
    location: "SeaTac",
    size: "Boy's size 14 ",
    user_id: 3,
    img_url:
      "https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/cn16125194.webp",
  },
  {
    title: "Tie Dye Shirt",
    description: "Pick up ASAP!",
    location: "Bellevue",
    size: "Medium",
    user_id: 4,
    img_url:
      "https://community-closet-s3-bucket.s3.us-west-2.amazonaws.com/tiedieshirt.jpg",
  },
];

const seedPosts = () => Post.bulkCreate(posts);

module.exports = seedPosts;
