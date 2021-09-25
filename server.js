
const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

inquirer.prompt([
    {
        type: 'list',
        name: 'track',
        message: 'What do you prefer to do?',
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add and employee', 'update an employee']
    }
])
.then((answer) => {
    if (answer.track === 'view all departments') {
        function Department(name, id) {
            this.name = name
            this.id = id
        }
        const management = new Department("Management", 1);
        const customer = new Department("Customer Interaction", 2);
        const tech = new Department("Technician", 3);
        const janitor = new Department("Janitorial", 4);

        console.table([management, customer, tech, janitor]);
    } else if (answer.track === 'view all roles') {
        function Role(job_title, role_id, department, department_id) {
            this.job_title = job_title
            this.role_id = role_id
            this.department = department
            this. department_id = department_id
        }
        const pres = new Role("President", 1, "Management", 1);
        const chief = new Role('Chief Financial Officer', 2, "Management", 1);
        const planner = new Role('Publicity Planner', 3, 'Management', 1);
        const dest = new Role('Receiptionist', 4, 'Customer Interaction', 2);
        const sales = new Role('Sales Rep', 5, 'Customer Interaction', 2);
        const social = new Role('Social Planner', 6, 'Customer Interaction', 2);
        const mech = new Role('Mechanical Engineer', 7, 'Technician', 3);
        const tech = new Role('Computer Programmer', 8, 'Technician', 3);
        const dev = new Role('Product Developer', 9, 'Technician', 3);
        const jan = new Role('Janitor', 10, 'Janitorial', 4);
        const tor = new Role('Janitor', 11, 'Janitorial', 4);

        console.table([pres, chief, planner, dest, sales, social, mech, tech, dev, jan, tor]);
    } else if (answer.menu === 'view all employees') {
        function Employee(employee_id, first_name, last_name, job_title, department, salary, manager) {
            this.employee_id = employee_id
            this.first_name = first_name
            this.last_name = last_name
            this.job_title = job_title
            this.department = department
            this.salary = salary
            this.manager = manager
        }
        const president = new Employee
    }
});
