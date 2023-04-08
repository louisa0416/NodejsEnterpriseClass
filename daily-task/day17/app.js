const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(console.log("資料庫連線中"))
  .catch((err) => {
    console.log(err);
  });

const indexRouter = require("./routes/index");
const booksRouter = require("./routes/books");
const authorsRouter = require("./routes/authors");
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

module.exports = app;
