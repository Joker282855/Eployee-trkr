INSERT INTO department (name)
VALUES
    ('Management'),
    ('Customer Service'),
    ('Technician'),
    ('Janitorial');

INSERT INTO role (title, salary, department_id)
VALUES
    ('President', '121,092.25', 1),
    ('Vice President', '100,025.50', 1),
    ('Marketing Manager', '75,000.23', 1),
    ('Chief Financial Officer', '70,000.34', 1)
    ('Customer Service Representative', '26,188.75', 2),
    ('Customer Service Representative', '26,188.75', 2),
    ('Customer Service Representative', '26,188.75', 2),
    ('Customer Service Respresentative', '26,188.75', 2),
    ('Customer Service Representative', '26,188.75', 2),
    ('Computer Programmer', '40,234.35', 3),
    ('MIT Technician', '45,346.75', 3),
    ('Television Programmer', '42,456.45', 3),
    ('Janitor', '25,738.23', 4),
    ('Janitor', '25,738.36', 4),
    ('Janitor', '25738.36', 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Sarah', 'Warnick', 1),
    ('Bethany', 'Crockston', 2),
    ('David', 'Phillips', 3),
    ('Joseph', 'Swenson', 4),
    ('Archileta', 'David', 5),
    ('Robert', 'Flakeson', 6, 5),
    ('Jessica', 'Stevenson', 7, 5),
    ('Tom', 'Hardy', 8, 5),
    ('Brooke', 'Jones', 9, 5),
    ('Audrey', 'Nielson', 10, 11),
    ('Daniel', 'Grody', 11),
    ('Ulysses', 'Grant', 12, 11),
    ('Rebecca', 'Shcultz', 13),
    ('Stephany', 'Berge', 14, 13),
    ('Austin', 'Birtrum', 15, 13);

    