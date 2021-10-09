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
};

function viewDepartment(){
    db.query("select department.id, department.name from department", (err, data) => {
        if (err) throw err
        console.table(data)
        menu()
    })
};

function viewRoles(){
    db.query("select role.id, role.title, role.salary, department.name as department from role left join department on role.department_id = department.id", (err, data) => {
        if (err) throw err
        console.table(data)
        menu()
    })
};

function viewEmployee(){
    db.query("select employee.id, employee.first_name, employee.last_name, role.title, manager.first_name as manager_first, manager.last_name as manager_last, role.salary, department.name as department from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on employee.manager_id = manager.id", (err, data) => {
        if (err) throw err
        console.table(data)
        menu()
    })
};

function addDepartment(){
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: "What is the name of the department you are adding"
    }]).then(function(answer){
        console.log(answer);
        db.query("INSERT INTO department SET ?",{
            name: answer.name
        },function(error, data){
            if (error) throw error
            console.table(data)
            menu()
        })
    })
};

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your new role"
        },
        {
            type: "input",
            name: "salary",
            message: "What is your salary"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is your departments id"
        }
    ]).then(function(answers){
        console.log(answers);
        db.query("INSERT INTO role SET ?",{
            title: answers.title,
            salary: answers.salary,
            department_id: answers.department_id
        },function(err, data) {
            if (err) throw err
            console.table(data)
            menu()            
        })
    })
};

function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is your first name"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is your last name"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the id of your role in the company"
        },
        {
            type: "input",
            name: "manager_id",
            message: "What is the id associated with your manager"
        }
    ]).then(function(answers){
        console.log(answers);
        db.query("INSERT INTO employee SET ?", {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.manager_id
        },function(err, data){
            if (err) throw err
            console.table(data)
            menu()
        })
    })
};

function employeeUpdate(){
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the first name of the employee you are updating" 
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the last name of the employee you are updating"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the id associated with the new role the employee will receive"
        }
    ]).then(function(answers){
        console.log(answers);
        db.query("update employee set role_id = role.id where id = ?", {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id
        },function(err, data){
            if (err) throw err
            console.table(data)
            menu()
        })
    })
};

menu();
