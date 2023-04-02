## 題目（將答案寫在 HackMD 並提交至回報區）

請在 express 專案中，將以下 url 中的參數使用 req.query 取出，並回傳取出的參數（可自行建立 express 專案，先在 app.js 練習即可）

```javascript
"http://localhost:3000/products?category=music&page=1"; // 在 POSTMAN 發出 GET 請求
app.get("/products", function (req, res) {
  // 取出參數
  /* 請在此填寫答案*/
  res.status(200).json({
    status: "success",
    data: {
      /* 請在此填寫答案*/
    },
  });
});
```

## setup

-切換到專案路徑 day13 下
-npm install
-npm start
