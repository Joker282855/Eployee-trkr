const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Coderrocks12!',
        database: 'tracker'
    },
    console.log('Now connected to the tracker database')
);

module.exports = db;