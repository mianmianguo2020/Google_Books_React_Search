const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  authors: { type: String, required: true },
  imageURL: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
