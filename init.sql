USE meineDatenbank;

CREATE TABLE names (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);


INSERT INTO names (name) VALUES
    ->     ('Alice Johnson'),
    ->     ('Bob Smith'),
    ->     ('Eva Martinez'),
    ->     ('Michael Davis');
    