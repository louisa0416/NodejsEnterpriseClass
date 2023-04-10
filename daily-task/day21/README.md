**uncaughtException 處理範例**

```javascript
// 程式出現重大錯誤時
process.on("uncaughtException", (err) => {
  // 記錄錯誤下來，等到服務都處理完後，停掉該 process
  console.error("Uncaughted Exception！");
  console.error(err);
  process.exit(1);
});
```

**unhandledRejection 處理範例**

```javascript
// 未捕捉到的 catch
process.on('unhandledRejection', (reason, promise) => {
  console.error('未捕捉到的 rejection：', promise, '原因：', reason);
  // 記錄於 log 上
});

## 題目（將答案寫在 GitHub 並提交至回報區）

將上方兩段處理 uncaughtException、unhandledRejection 錯誤處理加入到自己的專案加入 app.js 中，測試在有錯誤的狀況是否有正確紀錄錯誤，並提交可正確回饋錯誤的 GitHub
（也可使用此[專案](https://github.com/dogwantfly/week5-middleware/tree/appError)測試）
```
