DROP DATABASE IF EXISTS employeestracker_db;
CREATE employeestracker_db;

USE employeestracker_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name NOT NULL VARCHAR (30),
);
CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title NOT NULL VARCHAR(30),
    salary NOT NULL DECIMAL,
    department_id NOT NULL INT
);
CREATE TABLE employee(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   first_name NOT NULL VARCHAR(30),
   last_name NOT NULL VARCHAR(30),
   role_id NOT NULL INT,
   manager_id INT
)