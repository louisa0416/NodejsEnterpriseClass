const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`伺服器監聽中${port}`);
});

app.get("/", (req, res) => {
  res.send("Express Hello World");
});
