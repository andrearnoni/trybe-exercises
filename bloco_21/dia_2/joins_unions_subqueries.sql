USE Pixar;

SELECT M.id, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id;

SELECT M.id, B.domestic_sales, B.international_sales
FROM Movies AS M
INNER JOIN BoxOffice AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

