const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/drinkStore")
  .then(() => {
    console.log("資料庫連線成功");
  })
  .catch((error) => {
    console.log(error);
  });
const drinkSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: [true, "產品名稱未填寫"],
    },
    price: {
      type: Number,
      required: [true, "價錢未填寫"],
    },
    ice: {
      type: String,
      default: "正常冰",
    },
    sugar: {
      type: String,
      default: "全糖",
    },
    toppings: [
      {
        type: String,
        enum: ["珍珠", "椰果", "粉條"],
        default: "",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
  },
  {
    versionKey: false,
  }
);

const Drink = mongoose.model("Drink", drinkSchema);
module.exports = Drink;
/* 可先執行這段新增資料到 drinks collection */
// Drink.create(
//   {
//     product: "鮮奶茶",
//     price: 56,
//     sugar: "半糖",
//   },
//   {
//     product: "烏龍鮮奶茶",
//     price: 60,
//     sugar: "微糖",
//   },
//   {
//     product: "四季春茶",
//     price: 30,
//     sugar: "少糖",
//     ice: "去冰",
//   }
// );
