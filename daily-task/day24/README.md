# 🏅 Day 24 - 非同步錯誤管理

在二到四週主線任務中，我們會使用 try catch 處理 async function 中的錯誤，當 `try {...}` 中執行的程式發生錯誤就會跑到 catch
目前每個非同步函式中都各有 try catch，可以嘗試將執行非同步函式的錯誤一併接到 function 中處理，以減少每次加上 try catch 的動作

### 參考資源

- [Express 錯誤處理](https://expressjs.com/zh-tw/guide/error-handling.html)

## 題目（將答案寫在 GitHub 並提交至回報區）

嘗試參考上方介紹的方式，在 router 如：POST /posts，加入 `handleErrorAsync()` ，測試當執行 POST 有錯誤時，錯誤可正確透過此 middleware 接到 catch 並由 app.js 中的錯誤處理 middleware 回傳錯誤訊息
