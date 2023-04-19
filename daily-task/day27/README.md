### 參考資源

- [jwt.sign()](https://github.com/auth0/node-jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback)
- [什麼是 JWT](https://5xruby.tw/posts/what-is-jwt)

## 題目

延續前一天的每日任務，優化註冊功能，當使用者的資料都通過自訂的驗證條件，並成功新增使用者資料後，使用 `jwt.sign()` 產生 JWT，並回傳給 client（回傳內容須包含 token、使用者名稱 name）

回傳範例
![](https://i.imgur.com/pvum5TA.png =600x)
