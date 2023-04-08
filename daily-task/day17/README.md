## 題目（將答案寫在 HackMD 並提交至回報區）

以下為書籍與作者的 collection，請填入對應答案，讓取出單筆書籍資料時，可以關聯至 author 的資料

```javascript
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: String,
    introduction: String
  }, { versionKey: false }
);

const bookSchema = new mongoose.Schema({
  author : { type: mongoose.Schema.ObjectId, ref: /*請填入答案*/ },
  title: String
}, { versionKey: false }
);

const Author = mongoose.model('Author', authorSchema);
const Book = mongoose.model('Book', bookSchema);
```

取出所有 books 的資料，關聯 author 欄位並指定顯示 author 資料的 name 欄位

```javascript
Book.find({ _id: id }); /*請填入答案*/
```

可使用此[專案](https://github.com/dogwantfly/mongoose-populate)練習及測試是否可正確運作，流程為以下

- 新增一筆 author 資料
- 帶入 author id 新增一筆 book 資料
- 以 book id 取得指定的 book 資料，並有正確顯示出 author 的 name
  取得單筆 book 資料範例

```json
{
  "status": "success",
  "data": {
    "book": [
      {
        "_id": "62700cf6fe019820d43e5332",
        "author": {
          "_id": "62700a66e6922ea65f83054b",
          "name": "Mike"
        },
        "title": "book title"
      }
    ]
  }
}
```

## setup

- 切換到專案路徑 day17 下
- npm install
- npm start
