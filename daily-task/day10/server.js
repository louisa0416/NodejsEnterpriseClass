const Drink = require("./models/drinksSchema");
/* 可先執行這段新增資料到 drinks collection */
Drink.create(
  {
    product: "鮮奶茶",
    price: 56,
    sugar: "半糖",
  },
  {
    product: "烏龍鮮奶茶",
    price: 60,
    sugar: "微糖",
  },
  {
    product: "四季春茶",
    price: 30,
    sugar: "少糖",
    ice: "去冰",
  }
);
