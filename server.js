const db = require('./db/connection');
const inquirer = require('inquirer');

function menu(){
    inquirer.prompt([{
        type: 'list',
        name: 'result',
        message: 'What would you like to do',
        choices: [{
            name: 'View All Departments',
            value: 'viewAllDepartments'
        },{
            name: 'View All Roles'
        }]
    }])
}
