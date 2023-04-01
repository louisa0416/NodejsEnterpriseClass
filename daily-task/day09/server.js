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

//1. 尋找一筆 document 並將 `ice` 改為 `去冰`，`sugar` 改為 `半糖`
Drink.findOneAndUpdate(
  { product: "四季春茶" },
  {
    ice: "去冰",
    sugar: "半糖",
  }
)
  .then(() => {
    console.log("修改資料成功");
  })
  .catch((error) => {
    console.log(erroe);
  });

//2. 以 ID 尋找一筆 document 並將其刪除
Drink.findByIdAndDelete("64281e144e79221d85242d10")
  .then(() => console.log("資料刪除成功"))
  .catch((error) => {
    console.log(erroe);
  });
//3. 刪除全部 documents
Drink.deleteMany({})
  .then(() => console.log("刪除全部資料"))
  .catch((error) => {
    console.log(erroe);
  });
