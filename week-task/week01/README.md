# 第一週主線任務

### 前置作業

1. 請建立一個 database，並建立一個 `posts` collection
2. 將此 [JSON 資料](https://drive.google.com/file/d/1VCuWX2M6K-Du8pWlrcGImO_ux4Zwsa6v/view?usp=sharing)，透過 Compass 倒入到 `posts` collection

```
貼文集合欄位介紹
- name：貼文姓名
- image：貼文圖片
- content：貼文內容
- likes：按讚數
- comments：留言數
- createdAt：發文時間
- type：貼文種類[fan(粉絲)、group(社團)]
- tags：貼文標籤
```

## 題庫

### 課程範圍

1. 搜尋 name 欄位為 "Ray Xu" 的 document 列表

```=JavaScript
db.posts.find({name:"Ray Xu"})
```

2. 新增一筆 document，請全部欄位皆填寫

```=JavaScript
db.posts.insertOne(
  {"name":"小露","tags":["創業","養生","農業"],"type":"group","image":"http://dummyimage.com/197x100.png/dddddd/000000","createdAt":"2022-03-25 08:02:43 UTC","content":"棄台大醫學院博士改種菜　母氣到一年不講話","likes":1898,"comments":991},
)
```

3. 新增多筆 document，請全部欄位皆填寫

```=JavaScript
db.posts.insertMany([
{"name":"小露","tags":["創業","養生","農業"],"type":"group","image":"http://dummyimage.com/197x100.png/dddddd/000000","createdAt":"2022-03-25 08:02:43 UTC","content":"棄台大醫學院博士改種菜　母氣到一年不講話","likes":1898,"comments":991},
{"name":"小露","tags":["奇幻","成長","自我實現"],"type":"group","image":"http://dummyimage.com/197x100.png/dddddd/000000","createdAt":"2022-03-25 08:10:43 UTC","content":"頭銜是虛的，只有把日子過得目標踏實有滋味，那才是真的。","likes":555,"comments":100},
])
```

4. 修改一筆 document，filter 條件請用 `_id` 指定其中一筆資料，`content` 欄位調整為`測試資料`

```=JavaScript
db.posts.updateOne({_id:"641ea542895e31e06f046912"},{ $set:{content:"測試資料"}})

```

5. 修改多筆 `name` 欄位為 `"Ray Xu"` 的 document 列表，`content` 欄位都調整為`哈哈你看看你`

```=JavaScript
db.posts.updateMany({name:"Ray Xu"},{ $set:{content:"哈哈你看看你"}})


```

6. 刪除一筆 document，filter 條件請用 `_id` 任意指定其中一筆資料

```=JavaScript
db.posts.deleteOne({_id:"641ea542895e31e06f046912"})

```

7. 刪除多筆 document，filter 條件請用 `type` 為 `group` 的值，刪除所有社團貼文

```=JavaScript
db.posts.deleteMany({type:"group"})
```

8. 刪除多筆 document，filter 條件為以下條件
   a. `name`:`"Ray Xu"`
   b. `likes`: 500(含) 個讚以下

```=JavaScript
db.posts.deleteMany({ $and[
     {name:`"Ray Xu"},
     {likes: {$lte:500}}
]
})
```

9. 查詢全部 `posts` 的 document 列表

```=JavaScript
db.posts.find()
```

10. 關鍵字搜尋 `name` 裡面含有 `o` 的 document 列表

```=JavaScript
db.posts.find({name:/o/})
```

11. 查詢`name` 欄位為 `"Ray Xu"` ，filter 篩選出介於 500~1000(含) 個讚

```=JavaScript
db.posts.find({$and[
    {name:"Ray Xu"}
    ,{likes:{$gte:500}}
    ,{likes:{$lte:1000}}
]
})

```

12. 查詢 `comments` 有超過 500(含)以上的 document 列表

```=JavaScript
db.posts.find({
    comments:{$gte:500}
})

```

13. 查詢 `tags` 欄位，有 `謎因` **或(or)** `幹話` 的 document 列表

```=JavaScript
db.posts.find({
        {tags:{$in:"謎因","幹話"}}
})

```

14. 查詢 `tags` 欄位，有 `幹話` 的 document 列表，需隱藏 `_id` 欄位

```=JavaScript
db.posts.find({
        {tags:{$in:"幹話"}}
        ,{_id:false}
})
```

15. 請嘗試用 Mongo Shell 指令刪除全部 Documents

```=JavaScript
db.posts.deleteMany({})
```

### 自主研究題

1. posts 所有 document 數量為？(回傳數字)

```=JavaScript
db.posts.count()
```

2. 請查詢 `name` 為 `Ray Xu` 的 document 列表，排序為由新到舊

```=JavaScript
db.find({naem:"Ray Xu"}).sort(created:-1)
```

3. 請查詢 `name` 為 `Ray Xu` 的 document 列表，顯示前 30 筆資料

```=JavaScript
db.find({
 {naem:"Ray Xu"}
}).limit(30)
```

4. 請查詢 `name` 為 `Ray Xu` ，顯示 100(含) 個讚以上的前 30 筆 document 列表，時間排序由新到舊

```=JavaScript
db.posts.find({
   "name": "Ray Xu",
   "likes": {
    $gte: 30
   }
}).sort({ "createdAt": -1 }).limit(30)
```

5. 請查詢 `comments` 超過 `100` 的 document 列表，跳過前 30 筆資料，再顯示 30 筆資料

```=JavaScript
db.posts.find({ "comments": { "$gt": 100 } }).skip(30).limit(30)
```

6. 尋找超夯熱門貼文，請查詢 `likes` **且(and)** `comments` 都超過 `1,500(含)` 的 document 列表

```=JavaScript
db.posts.find({$and:[{likes:{$gte:1500}},{comments:{$gte:1500}}]})
```

7. 尋找普通熱門貼文，請查詢 `likes` **或(or)** `comments` 超過 `1,000(含)` 的 document 列表

```=JavaScript
db.posts.find({$or:[{likes:{$gte:1000}},{comments:{$gte:1000}}]})
```

8. 查詢 `image` 欄位為 `null` 的 document 列表

```=JavaScript
db.posts.find({image:null})
```

9. 隨意找一筆 document 資料，將 `tags` 欄位裡的陣列，新增一個新 tags 為 `遊記`

```=JavaScript
db.posts.updateOne({"name":"露露"},{$push:{tags:"遊記"}})
```

10. 將所有 `tags` 陣列裡的 `感情` 都移除

```=JavaScript
db.posts.update({},{$pull:{tags:"感情"}})
```
