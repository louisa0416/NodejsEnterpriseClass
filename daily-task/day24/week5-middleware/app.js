const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const errorHandler = require("./service/errorHandler");
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

app.use(errorHandler); //環境變數指令切換Dev或Prod、客製錯誤訊息(要放在router下面)

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
