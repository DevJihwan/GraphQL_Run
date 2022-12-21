//DB
const mysql = require('mysql');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234', 
    database : 'user_table' 
})

connection.connect();

connection.query('SELECT * from user', (error, rows, fiedls) => {
    if(error) {
        console.log('select user table error');
    }else{
        console.log('User Table info : ', rows);
    }
});