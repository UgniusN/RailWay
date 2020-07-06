INSERT INTO Users(user_id, username, password, name, last_name)
    VALUES(1, 'user', '{bcrypt}$2y$12$A7x.2lPxE6YdV8ed6OYbDucRiod32wqMF9JNerE.wq4glQWaIjRnO', 'John', 'Doe');
INSERT INTO Users(user_id, username, password, name, last_name)
    VALUES(2, 'admin', '{bcrypt}$2y$12$Idmjp6dBiFlYWheXcOGTfOfzpywTZ6sTeWN02jKvDSukc/8wD4JfS', 'Jack', 'Sparrow');


INSERT INTO Roles(role_id, role) VALUES(1, 'CUSTOMER');
INSERT INTO Roles(role_id, role) VALUES(2, 'ADMIN');

INSERT INTO Users_Roles(user_id, role_id) VALUES(1, 1);
INSERT INTO Users_Roles(user_id, role_id) VALUES(2, 2);

INSERT INTO Travels(start_destination, end_destination, price) VALUES('Panevezys', 'Vilnius', 12.50);
INSERT INTO Travels(start_destination, end_destination, price) VALUES('Vilnius', 'Kaunas', 15.50);
INSERT INTO Travels(start_destination, end_destination, price) VALUES('Kaunas', 'Panevezys', 12.50);
INSERT INTO Travels(start_destination, end_destination, price) VALUES('Panevezys', 'Klaipeda', 1.50);
INSERT INTO Travels(start_destination, end_destination, price) VALUES('Kaunas', 'Klaipeda', 18.25);