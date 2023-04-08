const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.ObjectId, ref: "Author" },
    title: String,
  },
  { versionKey: false }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
