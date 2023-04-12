const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/posts");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/users");

const app = express();

require("./connections");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// express 錯誤處理
// 自己設定的 err 錯誤
const resErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    // log 紀錄
    console.error("出現重大錯誤", err);
    // 送出罐頭預設訊息
    res.status(500).json({
      status: "error",
      message: "系統錯誤，請恰系統管理員",
    });
  }
};
// 開發環境錯誤
const resErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    message: err.message,
    error: err,
    stack: err.stack,
  });
};
// 錯誤處理
app.use(function (err, req, res, next) {
  // dev
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === "dev") {
    return resErrorDev(err, res);
  }
  // production
  if (err.name === "ValidationError") {
    err.message = "資料欄位未填寫正確，請重新輸入！";
    err.isOperational = true;
    return resErrorProd(err, res);
  }
  resErrorProd(err, res);
});

/* 
在 app.js 加入  uncaughtException、unhandledRejection 處理
並在錯誤發生時可正確在 server 紀錄錯誤

同步程式錯誤測試：app.js 中有未定義的變數
非同步錯誤測試： routes/posts.js 取得資料函式有錯誤，且未使用 catch 接錯

註：需在初次啟用 server 時才會出現 uncaughtException 或 unhandledRejection 錯誤
*/

// 錯誤：未定義變數 test
//test;

process.on("uncaughtException", (err) => {
  // 記錄錯誤下來，等到服務都處理完後，停掉該 process
  console.error("uncaught Exception");
  console.error(err);
  process.exit();
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("未捕捉到的rejection:", promise, "原因:", reason);
});

module.exports = app;
