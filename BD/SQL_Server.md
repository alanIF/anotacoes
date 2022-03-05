# Query
*SELECT * FROM Customers;
# Eliminar resultados duplicados 
* SELECT DISTINCT Country FROM Customers;
# Where 
* SELECT * FROM Customers
WHERE Country='Mexico';
# Like
* SELECT * FROM Customers
WHERE City LIKE 's%';
# And
* SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';
# Order by
* SELECT * FROM Customers
ORDER BY Country DESC;
# insert into
* INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');
# update  
* UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;
# delete  
* DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';
# group by and having
* SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;
# create db
* CREATE DATABASE databasename;
# create table, primary key, foreign key
* CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255),
    PRIMARY KEY (ID)

);
* CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);
# views
* CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';