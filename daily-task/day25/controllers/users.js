const User = require("../models/users");
const handleSuccess = require("../service/handleSuccess");
const appError = require("../service/appError");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const salt = process.env.SALT;
const user = {
  async getUser(req, res, next) {
    console.log("getUser");

    ///const email = req.body.email;
    const searchUser = await User.find();
    handleSuccess(res, searchUser);
  },
  async createUser(req, res, next) {
    const { name, email, photo, sex, password } = req.body;
    let newPassword = await bcrypt.hash(password, 12);

    //console.log("PW:", password);
    // res.status(200).json({
    //   status: "success",
    //   data: newPassword,
    // });
    const newUser = await User.create({
      name: name,
      email: email,
      photo: photo,
      sex: sex,
      password: newPassword,
    });

    handleSuccess(res, newUser);
  },
};

module.exports = user;
