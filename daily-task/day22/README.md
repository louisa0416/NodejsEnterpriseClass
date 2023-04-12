### 題目（將答案寫在 GitHub 並提交至回報區）

將以下 POST 路由中的註解下方的程式碼改為使用 `appError()` 自訂錯誤資訊，並測試可正確回傳錯誤訊息
routes/posts.js 的 POST 範例

```javascript
router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    if (!data.content) {
      // 將以下改為 appError 自訂錯誤回饋
      res.status(400).json({
        status: "false",
        message: "content 欄位為必填",
      });
      return;
    }
    const newPost = await Post.create({
      user: data.user,
      content: data.content,
      tags: data.tags,
      type: data.type,
    });
    res.status(200).json({
      status: "success",
      data: newPost,
    });
  } catch (error) {
    next(error);
  }
});
```

可將自己的專案加入 appError.js 自訂錯誤
若沒有也可使用此[專案](https://github.com/dogwantfly/week5-middleware/tree/appError)
