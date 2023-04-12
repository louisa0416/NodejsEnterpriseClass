### 題目

參考上方 error handler 範例，設計 POST 新增貼文時的 development 及 production 模式的錯誤處理，並以 POSTMAN 測試可正確運作

情境：

- request body 的 JSON 資料格式錯誤（缺少 `}`）

```json
// production 模式
{
    "status": 400,
    "message": "資料格式錯誤"
}

// devlopment 模式
{
    "status": 400,
    "message": "Unexpected end of JSON input",
    "error": {
        "expose": true,
        "statusCode": 400,
        "status": 400,
        "body": "{\n \"name\": \"test1\",\n \"content\": \"test1\",\n \"tags\": [\"感情\"],\n \"type\": \"person\"\n",
        "type": "entity.parse.failed"
    },
    "stack": "SyntaxError: Unexpected end of JSON input\n    at JSON.parse (<anonymous>)\n    ...略"
}
```

也可以其他錯誤情境練習，有正確回饋 development 及 production 模式的錯誤就 ok
