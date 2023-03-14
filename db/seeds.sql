INSERT INTO department (deptName)
VALUES("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO roles(title, salary, department_id)
VALUES("Salesperson",80000, 1),
    ("Sales Lead", 100000, 1),
    ("Lead Enginner", 150000, 2),
    ("Software Enginner", 120000, 2),
    ("Account Manager", 160000, 3),
    ("Accountant", 125000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Lena", "Saunders", 1, null),
    ("Camila","Spence", 1, 1),
    ("Spence", "Williams", 2, null),
    ("Dan", "Humphrey", 2, 2),
    ("Callan", "Lucas", 3, null),
    ("Francesco", "Logan", 3, 3),
    ("Mae", "Higgins", 4, null),
    ("Bethany", "Franklin", 4, 4);