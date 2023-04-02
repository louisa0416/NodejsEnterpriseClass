var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

//'http://localhost:3000/products?category=music&page=1' // 在 POSTMAN 發出 GET 請求
app.get("/products", (req, res) => {
  // 取出參數
  const { category, page } = req.query;

  res.status(200).json({
    status: "success",
    data: {
      category,
      page,
    },
  });
});

module.exports = app;
