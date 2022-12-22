//DB
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234', 
    database : 'web3' 
})

connection.connect();

connection.query('SELECT * from userinfo', (error, rows, fiedls) => {
    if(error) {
        console.log('select user table error');
    }else{
        console.log('User Table info : ', rows);
    }
});