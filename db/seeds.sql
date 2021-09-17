INSERT INTO department (name)
VALUES
    ('Management'),
    ('Customer Interaction'),
    ('Technician'),
    ('Janitorial');

INSERT INTO role (title, salary, department_id)
VALUES
    ('President', 121092.25, 1),
    ('Vice President', 100025.50, 1),
    ('Marketing Manager', 75000.23, 1),
    ('Chief Financial Officer', 70000.34, 1),
    ('Receipitonist', 26188.75, 2),
    ('Barber', 26188.75, 2),
    ('Hair Stylist', 26188.75, 2),
    ('Nail Stylist', 26188.75, 2),
    ('Tonail Painter', 26188.75, 2),
    ('Computer Programmer', 40234.35, 3),
    ('MIT Technician', 45346.75, 3),
    ('Television Programmer', 42456.45, 3),
    ('Janitor', 25738.23, 4),
    ('Janitor Assistant', 25738.36, 4),
    ('Night Shift Janitor', 25738.36, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Sarah', 'Warnick', 1, NULL),
    ('Bethany', 'Crockston', 2, NULL),
    ('David', 'Phillips', 3, NULL),
    ('Joseph', 'Swenson', 4, NULL),
    ('Archileta', 'David', 5, NULL),
    ('Robert', 'Flakeson', 6, 5),
    ('Jessica', 'Stevenson', 7, 5),
    ('Tom', 'Hardy', 8, 5),
    ('Brooke', 'Jones', 9, 5),
    ('Audrey', 'Nielson', 10, 11),
    ('Daniel', 'Grody', 11, NULL),
    ('Ulysses', 'Grant', 12, 11),
    ('Rebecca', 'Shcultz', 13, NULL),
    ('Stephany', 'Berge', 14, 13),
    ('Austin', 'Birtrum', 15, 13);

