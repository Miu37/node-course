

//公式解
function sum1(n){
return n*(n+1)/2;

}

// for
function sum2(n){
    let sum=0;
    for(i=0; i<=n ;i++){
        sum +=i
    }
    return sum;

}

console.time('SUM1');
for (let i=0; i < 10000; i++){
    sum1(100)
}
console.timeEnd('SUM1');

console.time('SUM2');
for (let i=0; i < 10000; i++){
    sum2(10000)
}

console.timeEnd('SUM2');


// reduce 
function sum3(n){
//  [1, 2, 3, 4,...n].reduce((sum, item) => sum + item, 0);
 Array.from(Array(n), keys()).reduce((sum, item) => sum + item, 0);
}
