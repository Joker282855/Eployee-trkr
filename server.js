const express = require('express');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');
const inquirer = require('inquirer');

// const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // view all the departments
// app.get('/api/department', (req, res) => {
//     const sql = `SELECT * FROM department`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });

//     });
// });

// // view all roles
// app.get('/api/role', (req, res) => {
//     const sql = `SELECT role.*, department.name
//                 AS department_name
//                 FROM role
//                 LEFT JOIN department
//                 ON role.department_id = department.id`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'roles retrieved',
//             data: rows
//         });
//     });
// });

// // view all employees
// app.get('/api/employee', (req, res) => {
//     const sql = `SELECT employee.*, role.title
//                 AS role_title
//                 FROM employee
//                 LEFT JOIN role 
//                 ON employee.role_id = role.id`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'employees retrieved',
//             data: rows
//         });
//     });
// });

// // add a department
// app.post('/api/department', ({ body }, res) => {
//     const errors = inputCheck(body, 'name');
//         if (errors) {
//             res.status(400).json({ errors: errors });
//         }
//         const sql = `INSERT INTO  department (name)
//         VALUES (?)`;
//         const params = [body.name];

//         db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'added to department',
//             data: body
//         });
//     });
// });

// // add a role 
// app.post('/api/role', ({ body }, res) => {
//     const errors = inputCheck(body, 'title', 'salary', 'department_id');
//     if (errors) {
//         res.status(400).json({ errors: errors });
//     }
//     const sql = `INSERT INTO role (title, salary, department_id)
//         VALUES (?,?,?)`;
//     const params = [body.title, body.salary, body.department_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'role was updated',
//             data: body
//         });
//     });
// });

// // add an employee
// app.post('/api/employee', ({ body }, res) => {
//     const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id')
//     if (errors) {
//         res.status(400).json({ errors: errors });
//     }
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
//         VALUES (?,?,?,?)`
//     const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });

// // update an employees role
// app.put('/api/employee/:id', (req, res) => {
//     const errors = inputCheck(req.body, 'role_id');

//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `UPDATE employee SET role_id = ?
//                 WHERE id = ?`;
//     const params = [req.body.role_id, req.params.id];
    
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             // check if a record was found
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Employee not found'
//             });
//         } else {
//             res.json({
//                 message: 'success',
//                 data: req.body,
//                 changes: result.affectedRows
//             });
//         }
//     });
// });

app.use((req, res) => {
    res.status(404).end();
});

// app.listen(PORT, () => {
//     console.log('Employee viewer is up and running')
// });

inquirer.prompt([
    {
        
    }
])