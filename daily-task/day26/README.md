## 題目（將答案寫在 GitHub 並提交至回報區）

延續前一天的每日任務，參考設計稿的[註冊（錯誤訊息）頁面](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/screen/1e66e82f-3514-46bf-8b3f-2d1e8260acd4/specs/)，安裝並使用 validator 提供的方法，加入自訂的驗證（暱稱、密碼長度、email 格式 ... 等等）
在接收到 req.body 的註冊資料後驗證資料是否符合格式

```javascript
router.post('/sign_up', handleErrorAsync(async(req, res, next) =>{
  let { email, password, confirmPassword, name } = req.body;
  // 加入驗證，確保使用者註冊資料符合格式
  ...
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

測試送出錯誤資料需正確回饋自訂的錯誤訊息

範例：
![](https://i.imgur.com/KBgdaJM.png=600x)
