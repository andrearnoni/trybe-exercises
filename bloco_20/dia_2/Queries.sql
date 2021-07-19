SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1 AS 'Número 1', 2 AS 'Número 2', 3 AS 'Número 3';

SELECT 10 + 15;

SELECT 60 * 14;

SELECT * FROM Scientists.Scientists;

SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

SELECT Name FROM Scientists.Scientists
ORDER BY Name;

SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') FROM Scientists.Projects;

SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM Scientists.AssignedTo;

SELECT Name FROM Scientists.Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name FROM Scientists.Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists') AS 'Quantidade de Cientistas' FROM Scientists.Scientists;