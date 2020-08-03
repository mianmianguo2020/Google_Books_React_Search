const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBook");

const bookSeed = [
  {
    title: "Hello World",
    id: "1",
    author: "admin",
    Intro:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    date: new Date(Date.now())
  },
  {
    title: "The Second Post",
    id: "2",
    author: "admin",
    Intro:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    date: new Date(Date.now())
  },
  {
    title: "Another One",
    id: "3",
    author: "admin",
    Intro:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    date: new Date(Date.now())
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
