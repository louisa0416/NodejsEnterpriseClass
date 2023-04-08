const express = require("express");
const router = express.Router();
const Author = require("../models/authors");

// 請先新增 author 資料
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    //console.log(data);

    if (data.name) {
      const newAuthor = await Author.create({
        name: data.name,
        introduction: data.introduction,
      });
      res.status(200).json({
        status: "success",
        data: newAuthor,
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
//查
router.get("/", async (req, res, next) => {
  try {
    const allAuthors = await Author.find();
    res.status(200).json({
      status: "success",
      data: allAuthors,
    });
  } catch (error) {
    res.status(400).json({
      status: "false",
      message: error.message,
    });
  }
});
module.exports = router;
