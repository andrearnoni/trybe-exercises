-- Desafio 1

CREATE VIEW film_with_categories AS
SELECT f.title, fc.category_id, c.name 
FROM sakila.film AS f
INNER JOIN sakila.film_category AS fc
ON f.film_id = fc.film_id
INNER JOIN sakila.category AS c
ON fc.category_id = c.category_id
ORDER BY f.title;

SELECT * FROM film_with_categories;

-- Desafio 2

CREATE VIEW film_info AS
SELECT fa.actor_id, concat(a.first_name, ' ', a.last_name) AS 'actor', f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN sakila.film AS f
ON fa.film_id = f.film_id
ORDER BY `actor`;

SELECT * FROM film_info;

-- Desafio 3

CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, a.city_id, c.city
FROM sakila.address AS a
INNER JOIN sakila.city AS c
ON a.city_id = c.city_id
ORDER BY c.city;

SELECT * FROM address_info;

-- Desafio 4

CREATE VIEW movies_languages AS
SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;

SELECT * FROM movies_languages;

-- Desafio 5







