const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/testPost")
  .then(() => console.log("資料庫連接成功"));

router.get("/", async (req, res, next) => {
  const allPosts = await Post.find();
  res.status(200).json({
    status: "true",
    message: allPosts,
  });
});
router.post("/", async (req, res, next) => {
  try {
    // 取得來自 request body 的資料
    // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
    //                       -> 未填寫 content 欄位 -> 回傳失敗回應
    const data = req.body;
    if (data.content !== undefined) {
      const newPost = await Post.create({
        content: data.content,
        image: data.image,
        author: data.author,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      res.status(200).json({
        status: "true",
        message: newPost,
      });
    } else {
      res.status(200).json({
        status: "false",
        message: "貼文內容欄位未填寫正確",
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "false",
      message: "欄位未填寫正確，或無此 todo ID",
    });
  }
});

module.exports = router;
