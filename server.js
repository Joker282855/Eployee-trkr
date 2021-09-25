
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
        const sales = new Role('Customer Interaction Manager', 5, 'Customer Interaction', 2);
        const social = new Role('Social Planner', 6, 'Customer Interaction', 2);
        const mech = new Role('Mechanical Engineer', 7, 'Technician', 3);
        const tech = new Role('Head Engineer/Developer', 8, 'Technician', 3);
        const dev = new Role('Product Developer', 9, 'Technician', 3);
        const jan = new Role('Head Janitor', 10, 'Janitorial', 4);
        const tor = new Role('Janitor', 11, 'Janitorial', 4);

        console.table([pres, chief, planner, dest, sales, social, mech, tech, dev, jan, tor]);
    } else if (answer.track === 'view all employees') {
        function Employee(employee_id, first_name, last_name, job_title, department, salary, manager) {
            this.employee_id = employee_id
            this.first_name = first_name
            this.last_name = last_name
            this.job_title = job_title
            this.department = department
            this.salary = salary
            this.manager = manager
        }
        const president = new Employee(1, 'John', 'Smith', 'President', 'Management', 60567.89, 'NULL');
        const officer = new Employee(2, 'Sarah', 'Robertson', 'Chief Financial Officer', 'Management', 56789.65, 'John Smith');
        const plan = new Employee(3, 'Becky', 'Parkinson', 'Publicity Planner', 'Management', 56786.90, 'John Smith');
        const front = new Employee(4, 'Hedy', 'Weeks', 'Receiptionist', 'Customer Interaction', 45678.89, 'Justin Jorgensen');
        const rep = new Employee(5, 'Justin', 'Jorgensen', 'Customer Interaction Manager', 'Customer Interaction', 45678.90, 'NULL');
        const meeting = new Employee(6, 'Becky', 'Moore', 'Social Planner', 'Customer Interaction', 44789.56, 'Justin Jorgensen');
        const loper = new Employee(7, 'Ian', 'Horton', 'Mechanical Engineer', 'Technician', 41567.34, 'Morty Rickersen');
        const nerd = new Employee(8, 'Morty', 'Rickersen', 'Head Engineer/Developer', 'Technician', 42544.34, 'NULL');
        const pro = new Employee(9, 'Jessica', 'Stevenspn', 'Product Engineer', 'Technician', 39754.45, 'Morty Rickenrsen');
        const toral = new Employee(10, 'Robert', 'Sorensen', 'Head Janitor', 'Janitorial', 44568.65, 'NULL');
        const tor = new Employee(11, 'Jorty', 'Ricter', 'Janitor', 'Janitorial', 41235.68, 'Robert Sorensen');

        console.table([president, officer, plan, front, rep, meeting, loper, nerd, pro, toral, tor]);
    } else if (answer.track === 'add a department') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'job',
                message: "What is the name of your new department"
            }
        ])
        .then((answer) => {
            if (answer.job === 'Nursery') {
                function Department(name, id) {
                    this.name = name
                    this.id = id
                }
                const management = new Department("Management", 1);
                const customer = new Department("Customer Interaction", 2);
                const tech = new Department("Technician", 3);
                const janitor = new Department("Janitorial", 4);
                const nurse = new Department("Nursery", 5);
                
                console.table(management, customer, tech, janitor, nurse);
            }
        })
    } else if (answer.track === 'add a role') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the name of the new role'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary you make'
            },
            {
                type: 'input',
                name: 'depo',
                message: 'What department does your role belong to'
            }
        ])
        .then((answer) => {
            if (answer.role === 'Accountant') {
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
                const sales = new Role('Customer Interaction Manager', 5, 'Customer Interaction', 2);
                const social = new Role('Social Planner', 6, 'Customer Interaction', 2);
                const mech = new Role('Mechanical Engineer', 7, 'Technician', 3);
                const tech = new Role('Head Engineer/Developer', 8, 'Technician', 3);
                const dev = new Role('Product Developer', 9, 'Technician', 3);
                const jan = new Role('Head Janitor', 10, 'Janitorial', 4);
                const tor = new Role('Janitor', 11, 'Janitorial', 4);
                const wire = new Role('Accountant', 12, 'Management', 1);
                
                console.table(pres, chief, planner, dest, sales, social, mech, tech, dev, jan, tor, wire);
            }
        })
    }
});
