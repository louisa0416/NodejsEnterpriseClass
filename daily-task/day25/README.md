### 題目（將答案寫在 GitHub 並提交至回報區）

測試註冊功能 POST `/users/sign_up`，使用[第五週專案](https://github.com/gonsakon/express-week4-sample/tree/week5) 練習（接下來會以此專案陸續練習第六週的內容）

- 於 models/user.js 加入使用者資料 schema，以儲存使用者 email 暱稱 密碼（可參考第六週[範例](https://github.com/gonsakon/express-week4-sample/blob/week6/models/usersModel.js)）
- 安裝 [bcryptjs](https://www.npmjs.com/package/bcryptjs) 套件，使用 bcrypt.js 的 `hash()` 將 client 端傳送的密碼經過雜湊再儲存至資料庫

```javascript
router.post('/sign_up', handleErrorAsync(async(req, res, next) =>{
  let { email, password, confirmPassword, name } = req.body;
  // 加密密碼
  password =
  const newUser = await User.create({
    email,
    password,
    name
  });
  res.status(200).json({
    status: 'success',
    data: newUser
  });
}))
```

測試註冊 API `/users/sign_up` 並取得加密後的密碼

範例：

![](https://i.imgur.com/iVkplJW.png =500x)
