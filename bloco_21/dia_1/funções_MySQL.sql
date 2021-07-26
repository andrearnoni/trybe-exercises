USE hr;

SELECT MAX(SALARY) FROM employees;

SELECT MAX(SALARY) - MIN(SALARY) FROM employees;

SELECT 
    JOB_ID, AVG(SALARY)
FROM
    employees
GROUP BY JOB_ID
ORDER BY AVG(SALARY) DESC;

SELECT 
    SUM(SALARY)
FROM
    employees;

SELECT 
    ROUND(MAX(SALARY), 2) AS 'Maior Salário',
    ROUND(MIN(SALARY), 2) AS 'Menor Salário',
    ROUND(SUM(SALARY), 2) AS 'Soma dos Salários',
    ROUND(AVG(SALARY), 2) AS 'Média dos Salários'
FROM
    employees;

-- Requisito 6 1º jeito de se fazer    
SELECT COUNT(JOB_ID) FROM employees
WHERE JOB_ID = 'IT_PROG';

-- Requisito 6 2º jeito de se fazer
SELECT JOB_ID, COUNT(*) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID;

SELECT JOB_ID, SUM(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

SELECT JOB_ID, AVG(SALARY) FROM employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY AVG(SALARY) DESC;

USE hr;

SELECT department_id, AVG(salary) 'average_salary' , COUNT(*) 'number_of_employees' FROM hr.employees
GROUP BY department_id
HAVING `number_of_employees` > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';

SELECT PHONE_NUMBER FROM employees;

SELECT * FROM employees
WHERE length(first_name) >= 8;

SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

SELECT employee_id, first_name, DAY(hire_date) FROM employees;

SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

SELECT UCASE(first_name) FROM employees;

SELECT last_name, hire_date FROM employees
WHERE MONTH(hire_date) = 07
AND YEAR(hire_date) = 1987;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) FROM employees;