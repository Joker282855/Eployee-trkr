const db = require('./db/connection');
const inquirer = require('inquirer');

function menu(){
    inquirer.prompt([{
        type: "list",
        name: "result",
        message: "What would you like to do",
        choices: [{
            name: "View All Departments",
            value: "viewAllDepartments"
        },{
            name: "View All Roles",
            value: "viewAllRoles"
        },{
            name: "View All Emmployees",
            value: 'viewAllEmployees'
        },{
            name: "Add a Department",
            value: "addADepartment"
        },{
            name: "Add a Role",
            value: "addARole"
        },{
            name: "Add an Employee",
            value: "addAnEmployee"
        },{
            name: "Update an Employee Role",
            value: "updateAnEmployeeRole"
        }]
    }])
}
