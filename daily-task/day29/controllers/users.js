const User = require("../models/users");
const handleSuccess = require("../service/handleSuccess");
const appError = require("../service/appError");
const { generateSendJWT } = require("../service/auth");
const bcrypt = require("bcrypt");
const validator = require("validator");

const user = {
  async getUser(req, res, next) {
    console.log("getUser");

    ///const email = req.body.email;
    const searchUser = await User.find();
    handleSuccess(res, searchUser);
  },

  async createUser(req, res, next) {
    const { name, email, photo, sex, password } = req.body;
    // 加入驗證，確保使用者註冊資料符合格式
    if (!validator.isEmail(email)) {
      appError("400", "email格式錯誤", next);
    }
    const patt = await new RegExp("(?=.*?[A-Z]).{8,}$");
    // console.log("va:", patt.test(password));

    if (!patt.test(password)) {
      appError(400, "密碼最少八個字符，至少一個大寫字母", next);
    }

    let newPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name: name,
      email: email,
      photo: photo,
      sex: sex,
      password: newPassword,
    });

    //handleSuccess(res, newUser);
    //回傳client
    generateSendJWT(newUser, 201, res);
  },

  //
  async sign_inUser(req, res, next) {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
      appError(400, "email格式錯誤", next);
    }

    const loginUser = await User.findOne({ email: email }).select("+password");
    if (!loginUser) {
      appError(400, "查無此帳號，請先註冊", next);
    }

    if (!bcrypt.compare(password, loginUser.password)) {
      appError(400, "您輸入的密碼不正卻，請重新輸入", next);
    }

    generateSendJWT(loginUser, 201, res);
  },
  async testUser(req, res, next) {
    console.log("test");

    ///const email = req.body.email;
    const searchUser = await User.find();
    handleSuccess(res, searchUser);
  },
};

module.exports = user;
