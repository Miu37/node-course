// 刷牙(3000) - 吃早餐(5000) - 寫功課(3000)
let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

let doWork = function(job, timer, cb) {
    setTimeout(() => {
        let dt = new Date();
        let result = `完成工作: ${job} at ${dt.toISOString()}`;
        cb(result);
    }, timer);
};

doWork("刷牙", 3000, function(result){
    console.log(result);
});

doWork("吃早餐", 8000, function(result){
    console.log(result);
});

doWork("寫功課", 11000, function(result){
    console.log(result);
});

