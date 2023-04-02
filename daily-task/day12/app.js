const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`伺服器監聽${port}中`);
});

app.get("/login", (req, res) => {
  res.send("歡迎來到登入頁");
});

app.get("/sign-up", (req, res) => {
  res.send("歡迎來到註冊頁");
});

app.get("/posts", (req, res) => {
  res.send("歡迎來到全體動態牆頁");
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`歡迎來到${id}個人牆頁`);
});
//http://localhost:3000/AMY

app.get("/:id/following", (req, res) => {
  const id = req.params.id;
  res.send(`歡迎來到${id}個人追蹤名單頁`);
});
//http://localhost:3000/AMY/following
