### 題目 Day 28 - 登入功能

**密碼解密**
若使用者成功註冊，密碼被加密後，未來需要驗證是否為該註冊帳號可使用 `compare()` 將密碼與加密後的字串進行比對

```javascript
// 尋找資料庫符合接收到的使用者資料，因 password 欄位在 schema 通常設定為不顯示，因此可使用 select() 將密碼顯示出來
const user = await User.findOne({ email }).select("+password");
bcrypt.compare(password, user.password);
// 第一個參數是接收到的密碼，第二個參數是由資料庫找出的該 user 的密碼，為雜湊加密的字串
```

- 實做登入功能 POST `/users/sign_in`，使用 bcryptjs `compare()` 比對密碼是否與資料庫中的密碼符合，並根據結果回饋訊息，若符合則需產生 JWT 給 client
- 若找不到符合的使用者資料或密碼比對不正確，都需回饋錯誤訊息
- 將產生 JWT 功能拆出獨立模組

::: spoiler 回饋訊息範例

![](https://i.imgur.com/GAWJkNu.png)

![](https://i.imgur.com/EHmLduK.png)

![](https://i.imgur.com/VXAYd2G.png)
:::
