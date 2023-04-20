# 🏅 Day 30 - JWT 驗證 middleware

## 題目

1.  延續前一天的每日任務，isAuth middleware 第 3 行的固定 token 改寫為：
    接收 `req.headers.authorization`，驗證 `req.headers.authorization` 是否存在，以及是否為 `Bearer` 開頭
    若符合此條件則取出 JWT 字串，若未成功取得 JWT，表示使用者可能尚未登入，需回傳 401 錯誤

        ```javascript=
        // isAuth middleware
        const isAuth = handleErrorAsync(async (req, res, next) => {
          let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2IxNTlhMDlhZmMwZTU4NzZiNTE5MSIsImlhdCI6MTY1MjIzMzkwMCwiZXhwIjoxNjYwMDA5OTAwfQ.07q6Ib5tSZ1CYJLg-SaGIdGUnuyDaHY6wX9NnuM23io' // 測試用 JWT

          // 驗證 token 正確性
          const decoded = await new Promise((resolve,reject)=>{
            jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
              if(err){
                reject(err)
              } else{
                resolve(payload)
              }
            })
          })

          const currentUser = await User.findById(decoded.id);

          req.user = currentUser;
          next();
        });
        ```

2.  設計[取得個人資料](https://xd.adobe.com/view/c0763dbe-fc15-42e8-be0b-8956ed03e675-9525/screen/112f9990-41f0-4c0d-8704-67279a52a49c/)路由 GET `/users/profile`，加入 isAuth middleware，當 request 帶上的 token 驗證通過，就將取出的 user 資料回傳給 client
