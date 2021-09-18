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

// view all the departments
app.get('/api/department', (req, res) => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// view all roles
app.get('/api/role', (req, res) => {
    const sql = `SELECT * FROM role`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'roles retrieved',
            data: rows
        });
    });
});

// view all employees
app.get('/api/employee', (req, res) => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'employees retrieved',
            data: rows
        });
    });
});

// add a department
app.post('/api/department', ({ body}, res) => {
    const errors = inputCheck(body, 'name');
    if (errors) {
        res.status(400).json({ errors: errors });
    }
});

app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log('Employee viewer is up and running')
});

