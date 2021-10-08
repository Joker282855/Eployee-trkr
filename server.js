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
        },{
            name: "quit",
            value: "quit"
        }]
    }]).then(function(data){
        console.log(data)
        switch (data.result){
            case "viewAllDepartments":
                viewDepartment()
                break;
            case "viewAllRoles":
                viewRoles()
                break;
            case "viewAllEmployees":
                viewEmployee()
                break;
            case "addADepartment":
                addDepartment()
                break;
            case "addARole":
                addRole()
                break;
            case "addAnEmployee":
                addEmployee()
                break;
            case "updateAnEmployeeRole":
                employeeUpdate()
                break;
        }
    })
}

function viewEmployee(){
    db.query("select employee.id, employee.first_name, employee.last_name, role.title, manager.first_name as manager.first_name, manager.last_name as manager.last_name department.name as department from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee.manager_id = manager.id", (err, data) => {
        if (err) throw err
        console.table(data)
        menu()
    })
}

menu();
