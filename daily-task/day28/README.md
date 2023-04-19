### 題目 Day 28 - 登入功能

- 實做登入功能 POST `/users/sign_in`，使用 bcryptjs `compare()` 比對密碼是否與資料庫中的密碼符合，並根據結果回饋訊息，若符合則需產生 JWT 給 client
- 若找不到符合的使用者資料或密碼比對不正確，都需回饋錯誤訊息
- 將產生 JWT 功能拆出獨立模組

::: spoiler 回饋訊息範例

![](https://i.imgur.com/GAWJkNu.png)

![](https://i.imgur.com/EHmLduK.png)

![](https://i.imgur.com/VXAYd2G.png)
:::
