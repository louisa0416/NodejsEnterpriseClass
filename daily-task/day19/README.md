## 題目

嘗試使用 `app.use()` 設計一個處理錯誤路由以及一個伺服器程式錯誤的 Middleware，

- 處理錯誤路由：
  當 client 端造訪錯誤的路由，就回傳狀態碼 404，並回傳 JSON 物件，status 為 `'error'`，回饋訊息 message 為`無此頁面資訊`

      app.use (function (req,res,next){
          res.status(404).json({
              status:"error",
              message:"無此頁面資訊",
          })
      });

- 伺服器程式錯誤：
  當 server 端有程式出錯的情況，導致 client 端無法正確造訪路由，就回傳狀態碼 500，並回傳 JSON 物件，status 為 `'error'`，回饋訊息 message 為 `系統錯誤，請恰系統管理員`

      app.use(function (req,res,next){
          res.status(500).json({
              status:"error",
              message:"系統錯誤，請恰系統管理員",
          })
      });
