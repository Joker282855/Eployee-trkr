const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Coderrocks12!',
        database: 'tracker'
    },
    console.log('Now connected to the tracker database')
);

db.query(`SELECT * FROM department`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log('Employee viewer is up and running')
});

