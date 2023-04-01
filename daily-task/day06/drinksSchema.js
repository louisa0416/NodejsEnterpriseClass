const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/drinkStore");

const drinksSchema = new mongoose.Schema({
  //     - 產品名稱（product）: 需為字串,必填，若未填寫，錯誤訊息為「產品名稱未填寫」
  // - 價錢（price）: 需為數字, 必填，若未填寫，錯誤訊息為「價錢未填寫」
  // - 冰塊（ice）： 需為字串, 若未填寫預設為 '正常冰'
  // - 甜度（sugar）：需為字串，若未填寫預設為 '全糖'
  // - 配料（toppings）：為陣列，內容需為字串
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
  toppings: [{ type: String }], // 若只有設定型別可以使用簡寫 [String]
});
