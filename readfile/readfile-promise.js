
    const fs = require('fs');
    
    
let p = new Promise ((resolve, reject)=>{
    fs.readFile('test11111.txt', 'utf-8', (err, data) => {

      if (err) {
        // 錯誤了
        reject('喔喔喔，發生錯誤了');
      } else {
        // 因為沒有 err，所以是正確的
        resolve(data);
      }
      p.then((result)=>{
          console.log(result)
      }).catch((error)=>{
          console.error(err);
      });
    });
});