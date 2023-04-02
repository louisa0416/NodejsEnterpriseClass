var express = require("express");
var router = express.Router();
const User = require("../models/users");

//查詢
router.get("/", async function (req, res, next) {
  const allUser = await User.find();
  res.status(200).json({ status: "true", data: allUser });
  res.send("respond with a resource");
});

//刪除
router.delete("/", async (req, res, next) => {
  await User.deleteMany({});
  res.status(200).json({ status: "true", data: "" });
});

//新增
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    let { nickName, gender, avatar } = data;
    if (!nickName || !gender) {
      //回傳失敗
      res.status(400).json({ status: "false", data: "輸入欄位不正確" });
    } else {
      //新增至user model
      const newUser = await User.create({
        nickName: nickName,
        gender: gender,
        avatar: avatar,
      });

      //回傳成功
      res.status(200).json({ status: "true", data: newUser });
    }
  } catch (error) {
    res.status(400).json({ status: "false", data: error.message });
  }
});

//修改  http://localhost:3000/users/642986aedd3f035f92185de4
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const { nickName, gender, avatar } = data;
    console.log("id:" + id);

    if (!nickName || !avatar) {
      //回傳失敗
      res.status(400).json({ status: "false", data: "輸入欄位不正確" });
    } else {
      const editContent = {
        nickName,
        gender,
      };
      // 找出此筆 id 並編輯資料
      const editUser = await User.findByIdAndUpdate(id, editContent);
      console.log("editUser " + editUser);

      if (editUser) {
        // 回傳成功
        res.status(200).json({ status: "true", data: editUser });
      } else {
        // 回傳失敗 "id 不存在"
        res.status(400).json({ status: "false", data: "id 不存在" });
      }
    }
  } catch (error) {
    res.status(400).json({ status: "false", data: error.message });
  }
});

module.exports = router;
