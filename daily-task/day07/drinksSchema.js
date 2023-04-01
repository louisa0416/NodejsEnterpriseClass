const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/drinkStore");

const drinksSchema = new mongoose.Schema({
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

//建立 Model mongoose.model()第一個參數為 Collection 的名稱，第二個參數帶入 Schema
const Drinks = new mongoose.model("drink", drinksSchema);

const newDrink = new Drinks({
  product: "伯爵紅茶拿鐵",
  price: 60,
  ice: "去冰",
  suger: "無糖",
  toppings: ["珍珠"],
});

newDrink
  .save()
  .then(() => {
    console.log("新增資料成功");
  })
  .catch((error) => {
    console.log(error);
  });

Drinks.create({
  product: "鮮奶茶",
  price: 55,
  sugar: "微糖",
});
console.log(Drinks.find());
