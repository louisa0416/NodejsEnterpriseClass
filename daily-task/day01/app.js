const checkScore = (score) => {
  return new Promise((resolve, reject) => {
    const score = Math.round(Math.random() * 100);

    setTimeout(() => {
      if (score >= 60) {
        resolve(`分數:${score}，恭喜及格`); // 執行實現方法
      } else {
        reject(`分數:${score}，不及格`); // 執行拒絕方法
      }
    }, 1000);
  });
};

checkScore(60)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
