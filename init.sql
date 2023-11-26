USE meineDatenbank;

CREATE TABLE names (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);


INSERT INTO names (name) VALUES
    ('Angela Merkel'),
    ('Olaf Scholz'),
    ('Christian Lindner'),
    ('Robert Habeck')