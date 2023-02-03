DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;
-- creates department table
CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    deptName NOT NULL VARCHAR (30),
);
--creates role table
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title NOT NULL VARCHAR(30),
    salary NOT NULL DECIMAL,
    department_id NOT NULL INT
);
--creates employee table
CREATE TABLE employee(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name NOT NULL VARCHAR(30),
   last_name NOT NULL VARCHAR(30),
   role_id NOT NULL INT,
   manager_id INT
)