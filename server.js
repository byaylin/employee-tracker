//dependencies
const inquirer = require ('inquirer');
const mysql = require ('mysql2');
const table = require('console.table');
//const express = require('express');
//const { response } = require('express');

//sql connection 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'company_db'
});
db.connect(err =>{
    if (err) {
        throw err;
    } 
    console.log("Welcome!")
})

//main prompt for app
const main = () =>{ 
    inquirer.prompt([
        {
            type: 'list',
            name: 'main',
            message:'What would you like to do?',
            choices: ['View All Departments','View All Roles', 'View All Employees', 'Add Department','Add Role', 'Add Employee', 'Update Employee Role','All Done!']
        }
    ]).then((response) =>{
        console.log(response.continue);
        switch(response.main){
            case 'View All Departments':
                viewAllDept();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'View All Employees':
            viewAllEmployees();
                break;
            case 'Add Department':
                addDept();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateRole();
            case 'All Done!':
                console.log("See you later");
            }
        })
    }
//display all depts
viewAllDept = () =>{
    console.table("Currently displaying all department in the company");
    db.query("SELECT * FROM department", (err, results) => {
        if (err){
            throw err;
        }
        console.table(results);
        main();
    })
}
//display all roles
viewAllRoles = () =>{
    console.table("Currently displaying all roles in the company");
    db.query("SELECT * FROM roles", (err, results) => {
        if (err){
            throw err;
        }
        console.table(results);
        main();
    })
}
//displays all employees
viewAllEmployees = () => {
    console.table("All employees of the company currently being shown");
    db.query("SELECT * FROM employee", (err, results) =>{
        if (err){
            throw err;
        }
        console.table(results);
        main();
    });
}
//adds department
addDept = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'dept',
            message:'What is the name of the department to be added?'
        }
    ])
    .then((response => {
        db.query('INSERT INTO department (deptName) VALUES (?)', response.dept, (err, results)=>{
            if (err){
                throw err
            }
            console.table('New department added to database');
            main();
        })
    }))
}
//adds role
addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'role',
            message:'What is the name of the role to be added?'
        },
        {
            type: 'number',
            name:'salary',
            message:'What is the salary of the role?'
        },
        {
            type: 'number',
            name:'deptId',
            message:'What is the department id of this role?'
        }
    ])
    .then((response => {
        db.query('INSERT INTO roles(title, salary, department_id) VALUES (?, ?, ?)', [response.role, response.salary, response.deptId], (err, results)=>{
            if (err){
                throw err
            }
            console.table('New role added to database');
            main();
        })
    }))
}
//adds employee
addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name:'firstName',
            message:'What is their first name?'
        },
        {
            type: 'input',
            name:'lastName',
            message:'What is their last name?'
        },
        {
            type: 'input',
            name:'role',
            message:'What is their role?'
        },
        {
            type: 'number',
            name:'manager',
            message:'Who is their manager? Please enter manager ID'
        }
    ])
    .then((response => {
        db.query('INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [response.firstName, response.lastName, response.role, response.manager], (err, results)=>{
            if (err){
                throw err
            }
            console.table('New employee added to database');
            main();
        })
    }))
}
//update role
updateRole = () =>{
    inquirer.prompt([
        {
            type: 'number',
            name:'employee',
            message:'Enter the employee id number',
        },
        {
            type: 'number',
            name:'role',
            message:'Enter new role id'
        }
    ])
    .then((response) => {
        db.query('UPDATE employee SET role_id = ? WHERE id = ?',[response.employee, response.role], (err, results) =>{
            if (err){
                throw err
            }
            console.table('Role has been updated');
            main();
        })
    })
};

main();