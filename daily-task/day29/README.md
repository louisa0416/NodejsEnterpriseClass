### 參考資源

- [jwt.verify()](https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback)

## 題目

**將驗證 JWT 過程設計為一個 isAuth middleware，驗證前端傳送過來的 JWT，並回傳驗證成功訊息**

情境：當使用者發出 GET `/users/test` 請求時，需先以 `isAuth()` 驗證前端夾帶的 JWT 是否正確，若正確則回傳成功訊息
:::spoiler 回傳訊息參考
![](https://i.imgur.com/LKIZF8y.png)

:::

--

- 需使用先前完成的註冊功能，註冊一個測試的使用者資料，並成功取得回傳的 JWT
- 將此 JWT 帶入 isAuth middleware 驗證

**middleware 範例**

```javascript
const isAuth = handleErrorAsync(async (req, res, next) => {
  let token = // 請帶入註冊成功回傳的 JWT
  // 驗證 token 正確性

  /*

    請在此參考上方做法驗證 JWT

  */

  //
  const currentUser = await User.findById(/* 帶入驗證 token 解碼後取得的使用者 id */);
  // 在 req 物件加入 user 欄位，並由 next() 帶到 handleErrorAsync(async(req,res,next)=>{...})
  req.user = currentUser;
  next();
});
```

將 middleware 加入測試的 router 中

```javascript
// routes/users.js
router.get(
  "/test",
  isAuth,
  handleErrorAsync(async (req, res, next) => {
    res.status(200).json({
      status: "success",
      user: req.user,
    });
  })
);
```
