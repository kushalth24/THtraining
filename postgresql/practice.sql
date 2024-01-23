-- import CSV file to PostgreSQL table
-- COPY persons(first_name, last_name, dob, email)
-- FROM 'C:\sampledb\persons.csv'
-- DELIMITER ',' --> how the columns in CSV file are differenciated.
-- CSV HEADER; --> this states that CSV file we want to import has header..

-- export PostgreSQL table to CSV file.
--1->  COPY persons(first_name,last_name,email) 
--     TO 'C:\tmp\persons_partial_db.csv' DELIMITER ',' CSV HEADER;

--2->  COPY persons TO 'C:\tmp\persons_db.csv' DELIMITER ',' CSV HEADER;

-- Dealing with JSON data in PostgreSQL
-- PostgreSQL provides two native operators -> and ->> to help you query JSON data.
-- The operator -> returns JSON object field by key.
-- The operator ->> returns JSON object field by text.

-- Transaction in PostgreSQL
---> BEGIN TRANSACTION, BEGIN WORK, BEGIN
---> QUERIES
---> COMMIT TRANSACTION, COMMIT WORK, COMMIT

-- If we want to Roll Back.
---> BEGIN TRANSACTION, BEGIN WORK, BEGIN
---> QUERIES
---> ROLLBACK TRANSACTION, ROLLBACK WORK, ROLLBACK

--PostgreSQL added the ON CONFLICT target action clause to...
-- the INSERT statement to support the upsert feature.
-- INSERT INTO table_name(column_list) VALUES(value_list) ON CONFLICT target action;

-- In this statement, the target can be one of the following:
--  (column_name) – a column name.
--  ON CONSTRAINT constraint_name – where the constraint name could be the name of the UNIQUE constraint.
--  WHERE predicate – a WHERE clause with a predicate.

-- The action can be one of the following:
--  DO NOTHING – means do nothing if the row already exists in the table.
--  DO UPDATE SET column_1 = value_1, .. WHERE condition – update some fields in the table.

-- UPDATE JOIN

-- SUBQUERY IS QUERY INSIDE A QUERY
-- can be written by either '=' operator or IN operator
-- ANY, ALL, EXISTS  can be used

--Grouping sets
-- SELECT
--     c1,
--     c2,
--     aggregate_function(c3)
-- FROM
--     table_name
-- -- GROUP BY
--     GROUPING SETS (
--         (c1, c2),
--         (c1),
--         (c2),
--         ()
-- );

--cube
-- SELECT
--     c1,
--     c2,
--     c3,
--     aggregate (c4)
-- FROM
--     table_name
-- GROUP BY
--     CUBE (c1, c2, c3);

--Rollup
-- SELECT
--     c1,
--     c2,
--     c3,
--     aggregate(c4)
-- FROM
--     table_name
-- GROUP BY
--     ROLLUP (c1, c2, c3);


-- CASE – show you how to form conditional queries with CASE expression.
-- COALESCE – return the first non-null argument. You can use it to substitute NULL by a default value.
-- NULLIF – return NULL if the first argument equals the second one.
-- CAST – convert from one data type into another e.g., from a string into an integer, from a string into a date.

-- -- Create a table for basic data types
-- CREATE TABLE employees (
--     employee_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50),
--     last_name VARCHAR(50),
--     birth_date DATE,
--     hire_date DATE,
--     salary DECIMAL(10, 2),
--     is_active BOOLEAN
-- );

-- -- Create a table with a foreign key reference
-- CREATE TABLE departments (
--     department_id SERIAL PRIMARY KEY,
--     department_name VARCHAR(100)
-- );

-- CREATE TABLE employee_departments (
--     employee_id INT REFERENCES employees(employee_id),
--     department_id INT REFERENCES departments(department_id),
--     PRIMARY KEY (employee_id, department_id)
-- );

-- -- Create a table with indexes
-- CREATE TABLE products (
--     product_id SERIAL PRIMARY KEY,
--     product_name VARCHAR(100),
--     price DECIMAL(8, 2)
-- );

-- CREATE INDEX idx_product_name ON products(product_name);

-- -- Create a table with constraints
-- CREATE TABLE orders (
--     order_id SERIAL PRIMARY KEY,
--     order_date DATE,
--     customer_name VARCHAR(100),
--     total_amount DECIMAL(10, 2) CHECK (total_amount >= 0)
-- );

-- -- Create a table with a unique constraint
-- CREATE TABLE customers (
--     customer_id SERIAL PRIMARY KEY,
--     email VARCHAR(100) UNIQUE,
--     phone_number VARCHAR(20)
-- );

-- -- Create a table with a serial column
-- CREATE TABLE serial_example (
--     serial_id SERIAL PRIMARY KEY,
--     description VARCHAR(200)
-- );

-- -- Create a table with JSONB data type
-- CREATE TABLE json_example (
--     id SERIAL PRIMARY KEY,
--     data JSONB
-- );

-- -- Create a table with a timestamp column
-- CREATE TABLE logs (
--     log_id SERIAL PRIMARY KEY,
--     log_message TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Insert data into the 'employees' table
-- INSERT INTO employees (first_name, last_name, birth_date, hire_date, salary, is_active)
-- VALUES 
--     ('John', 'Doe', '1990-01-15', '2020-05-01', 60000.00, true),
--     ('Jane', 'Smith', '1985-03-22', '2018-10-15', 75000.50, true),
--     ('Alice', 'Johnson', '1995-08-10', '2021-02-28', 50000.75, false),
--     ('Bob', 'Williams', '1982-11-05', '2017-08-10', 90000.25, true);

-- -- Insert data into the 'departments' table
-- INSERT INTO departments (department_name)
-- VALUES 
--     ('Sales'),
--     ('Finance'),
--     ('HR'),
--     ('IT');

-- -- Insert data into the 'employee_departments' table
-- INSERT INTO employee_departments (employee_id, department_id)
-- VALUES 
--     (1, 1),
--     (2, 1),
--     (3, 2),
--     (4, 3),
--     (4, 4);

-- -- Insert data into the 'products' table
-- INSERT INTO products (product_name, price)
-- VALUES 
--     ('Laptop', 1200.00),
--     ('Smartphone', 800.50),
--     ('Monitor', 300.75),
--     ('Printer', 150.25);

-- -- Insert data into the 'orders' table
-- INSERT INTO orders (order_date, customer_name, total_amount)
-- VALUES 
--     ('2022-01-10', 'Acme Corp', 1200.00),
--     ('2022-02-15', 'XYZ Ltd', 800.50),
--     ('2022-03-20', 'ABC Inc', 300.75),
--     ('2022-04-25', 'Tech Solutions', 150.25);

-- -- Insert data into the 'customers' table
-- INSERT INTO customers (email, phone_number)
-- VALUES 
--     ('john.doe@example.com', '+1234567890'),
--     ('jane.smith@example.com', '+9876543210'),
--     ('alice.johnson@example.com', '+1112233445'),
--     ('bob.williams@example.com', '+4455667788');

-- -- Insert data into the 'serial_example' table
-- INSERT INTO serial_example (description)
-- VALUES 
--     ('Serial Example 1'),
--     ('Serial Example 2'),
--     ('Serial Example 3');

-- -- Insert data into the 'json_example' table
-- INSERT INTO json_example (data)
-- VALUES 
--     ('{"name": "John", "age": 30, "city": "New York"}'),
--     ('{"name": "Jane", "age": 25, "city": "San Francisco"}'),
--     ('{"name": "Bob", "age": 40, "city": "Los Angeles"}');

-- -- Insert data into the 'logs' table
-- INSERT INTO logs (log_message, created_at)
-- VALUES 
--     ('Log entry 1', '2022-01-01 08:00:00'),
--     ('Log entry 2', '2022-01-02 10:30:00'),
--     ('Log entry 3', '2022-01-03 12:45:00');

-- select statement and alias
-- select first_name || ' ' || last_name AS fullname from employees 
-- alias containing spaces
-- select first_name || ' ' || last_name AS "full name" from employees 
-- ORDER By
-- select first_name, last_name from employees order by birth_date
-- select first_name, last_name from employees order by birth_date DESC
-- select first_name, last_name from employees order by birth_date DESC, salary ASC
-- SELECT first_name, LENGTH(first_name) len FROM employees ORDER BY len DESC;

-- if we define NULL LAST/ NULL FIRST at the end of query the result will displayed accordingly.

--select distinct department_name from departments

-- select department_id, department_name from departments where department_name = 'Finance'
-- select first_name from employees where hire_date >= '2020-05-01'
-- select first_name from employees where first_name in ('John','Jane')
-- select first_name from employees where first_name LIKE 'Jo%'
-- select first_name from employees where first_name LIKE 'J_h_'

-- not equal operator -->   <>
-- (BETWEEN ... AND ...)   clause
-- or / and 

-- PostgreSQL uses 
-- true, 't', 'true', 'y', 'yes', '1'      to represent true  
-- false, 'f', 'false', 'n', 'no', '0'     to represent false.

-- LIMIT operator -> limit the number of rows
-- OFFSET operator -> skipts the number of rows and then print result

--OFFSET row_to_skip { ROW | ROWS } FETCH { FIRST | NEXT } [ row_count ] { ROW | ROWS } ONLY
--e.g.  -> SELECT film_id, title FROM film ORDER BY title  FETCH FIRST ROW ONLY;
--The FETCH clause is functionally equivalent to the LIMIT clause. 
--If you plan to make your application compatible with other database systems, 
--you should use the FETCH clause because it follows the standard SQL.

-- ~~	LIKE
-- ~~*	ILIKE  // case insensitive
-- !~~	NOT LIKE
-- !~~*	NOT ILIKE
-- escape character -->10% --> '%10$%%'
-- is not null / is null


-- joins

-- GROUP BY and HAVING
-- SELECT column1, aggregate_function (column2) FROM table_name GROUP BY column1 HAVING condition;

-- union, intersect, except / followed by 'ORDER BY'
-- union
-- query1 union query2
-- intersect
-- query1 INTERSECT query2
-- except
-- query1 EXCEPT query2

--select data from json_example
 --select data->'age' from json_example
 --select data->> 'city' from json_example
 
 --aggregat functions on json data
-- SELECT 
--    MIN (CAST (info -> 'items' ->> 'qty' AS INTEGER)),
--    MAX (CAST (info -> 'items' ->> 'qty' AS INTEGER)),
--    SUM (CAST (info -> 'items' ->> 'qty' AS INTEGER)),
--    AVG (CAST (info -> 'items' ->> 'qty' AS INTEGER))
-- FROM orders;

-- interval Datatype:allowed range from -178,000,000 years to 178,000,000 years.