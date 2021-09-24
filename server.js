const express = require('express');
const db = require('./db/connection');
const inquirer = require('inquirer');
const apiRoutes = require('./routes/api');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', apiRoutes);

// inquirer.prompt([
//     {
//         type: 'list',
//         name: 'track',
//         message: 'What do you prefer to do?',
//         choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add and employee', 'update an employee']
//     }
// ])
// .then((answer) => {
//     if (answer.track === 'view all departments') { 

//     }
// });


app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    app.listen(PORT, () => console.log(`Listening to ${PORT}`));
});
