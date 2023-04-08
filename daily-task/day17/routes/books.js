const express = require("express");
const router = express.Router();
const Book = require("../models/books");
const Author = require("../models/authors");

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    // 取出所有 books 的資料，關聯 author 欄位並指定顯示 author 資料的 name 欄位
    const book = await Book.find({ _id: id }).populate({
      path: "author",
      select: "name",
    });

    if (book.length) {
      res.status(200).json({
        status: "success",
        data: {
          book,
        },
      });
    } else {
      res.status(400).json({
        status: "fail",
        message: "id 不存在",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    if (data.title) {
      const newBook = await Book.create({
        title: data.title,
        author: data.author,
        // author 的 id
      });
      res.status(200).json({
        status: "success",
        data: newBook,
      });
    } else {
      res.status(400).json({
        status: "false",
        message: "欄位未填寫正確，或無此 ID",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "false",
      message: error.message,
    });
  }
});

module.exports = router;
