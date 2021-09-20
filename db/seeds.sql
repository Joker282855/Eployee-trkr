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
    ('Bethany', 'Crockston', 2, 1),
    ('David', 'Phillips', 3, 1),
    ('Joseph', 'Swenson', 4, 1),
    ('Archileta', 'David', 5, 1),
    ('Robert', 'Flakeson', 6, 1),
    ('Jessica', 'Stevenson', 7, 1),
    ('Tom', 'Hardy', 8, 1),
    ('Brooke', 'Jones', 9, 1),
    ('Audrey', 'Nielson', 10, 1),
    ('Daniel', 'Grody', 11, 1),
    ('Ulysses', 'Grant', 12, 1),
    ('Rebecca', 'Shcultz', 13, 1),
    ('Stephany', 'Berge', 14, 1),
    ('Austin', 'Birtrum', 15, 1);

