// npm i express

const express = require('express')
//利用 express 來建立一個express application
const app = express();


// HTTP request
// method: get, post, put, delete
app.get('/', (request, response, next)=> {
    console.log('首頁')
    // response.send('首頁')    
});

app.get('/about', (request, response, next)=>{
    response.send('About me')
});

app.listen(3001, ()=>{
    console.log('Server start at 3001');
});