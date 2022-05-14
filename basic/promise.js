// promise 是一個表示非同步運算的最終完成或失敗的物件

// 1. 非同步
// 2. 最終 失敗或成功
// 3. 物件

// new Promise(executor);
// new 的時候要傳入 executor --> executor也只是一個函式

// function executor(resolve, reject){
//     // 非同步工作 
//     // 做成功的時候, 呼叫 resolve
//     // 做失敗的時候, 呼叫 reject
// };



let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

let doBrushPromise= doWork("刷牙", 3000);
doBrushPromise.then((result) => {
    console.log(result);

    let doEatPromise = doWork("吃早餐" , 5000);
    return doEatPromise;

})
.then((result) => {
    console.log(result);

    let doHwPromise = doWork("寫功課" , 3000);
    return doHwPromise;
})
.then((result) =>{
    console.log(result); 
});

