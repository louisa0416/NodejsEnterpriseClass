## 題目（將答案寫在 HackMD 並提交至回報區）

在 GET posts 網址列帶入排序及限制筆數的參數
並運用 Express 提供的 req.query 取得網址列的參數，將尋找到符合的資料設定排序及呈現指定資料數量

提交語法如下

```javascript
// routes/authors.js
router.get("/", async (req, res, next) => {
  try {
    const query = req.query;
    // 使用三元運算子判斷是否為 asc (由舊至新)，若是則由舊至新排列，否則由新至舊排列
    const timeSort = query.sort == "asc" ? "asc" : "desc";
    // 帶入網址列的參數
    const limit = query.limit;
    //console.log(query);

    const allAuthors = await Author.find()
      .sort({ name: timeSort })
      .limit(limit);

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
```

## setup

- 切換到專案路徑 day17 下
- npm install
- npm start
