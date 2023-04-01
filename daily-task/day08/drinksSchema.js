const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/drinkStore");
/*
在 Schema() 中第一個參數放 Schema，第二個參數可以調整設定
可以參考文件說明查看可調整的 options
*/
const drinksSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      require: [true, "產品名稱未填寫"],
    },
    price: {
      type: Number,
      require: [true, "價錢未填寫"],
    },
    ice: {
      type: String,
      default: "正常冰",
    },
    suger: {
      type: String,
      default: "全糖",
    },
    topping: [{ type: String }],
    createdAt: {
      type: Date,
      default: Date.now,
      select: false,
    },
  },
  { versionKey: false }
);

// toppings: [{type: String}],
// /* 加入 createdAt */
// createdAt: {
//   type: Date,
//   default: Date.now,
//   select: false
// }
// },{
// versionKey: false
// });
// ```

//建立Model
const Drinks = new mongoose.model("drink", drinksSchema);

Drinks.create({
  product: "大大紅茶",
  price: 30,
});

console.log(Drinks.find({ product: "大大紅茶" }));
