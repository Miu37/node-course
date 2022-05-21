// read stock no from mysql database

// mysql 2 是一個第三方套件
// npm i mysql2
// 引用進來
const mysql2 = require("mysql2/promise");
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

(async () => {
  
  // console.log(process.env.DB_HOST);

  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  let [data, fields] = await connection.execute("SELECT * FROM stocks");
  console.log(data);

  connection.end();
})();
