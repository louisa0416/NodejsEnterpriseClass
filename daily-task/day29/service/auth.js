const appError = require("../service/appError");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const handleErrorAsync = require("../service/handleErrorAsync");

const generateSendJWT = (user, httpCode, res) => {
  // 產生 JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_DAY,
  });

  user.password = undefined;
  res.status(httpCode).json({
    status: "true",
    user: {
      token,
      name: user.name,
    },
  });
};

const isAuth = handleErrorAsync(async (req, res, next) => {
  // 請帶入註冊成功回傳的 JWT

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZmOTBhYjllYjA5NzkxZDJjMjkzZSIsImlhdCI6MTY4MTk5NjQ4OCwiZXhwIjoxNjgyNjAxMjg4fQ.VsyWm7HMiwvjy3ThyUs2fWyV4TJP8ly4yKOc0dcKzbM";

  //確認token是否存在
  if (!token) {
    return next(appError(400, "你尚未登入", next));
  }
  // 驗證 token 正確性
  const decoded = await new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        reject(err);
      } else {
        resolve(payload);
      }
    });
  });
  console.log("decoded:", decoded);

  //decoded.id回傳resolve(payload)
  const currentUser = await User.findById(decoded.id);
  // 在 req 物件加入 user 欄位，並由 next() 帶到 handleErrorAsync(async(req,res,next)=>{...})
  req.user = currentUser;
  next();
});

module.exports = { isAuth, generateSendJWT };
