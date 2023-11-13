const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');

const mysqlConfig = {
  host: "mysql_server",
  user: "wi22254",
  password: "passwort",
  database: "meineDatenbank",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

//Variable mit datatype boolean false, welche den Verbindungsstatus zum mysql Server angibt
let connected = false;

//let con = null

const app = express()
const port = 3000



//Eine Schleife welche jede 5 Sekunde prüft ob eine Verbindung zum mysql Server besteht
function delayConnection() {
  const pool = mysql.createPool(mysqlConfig);
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('MYSQL Server ist noch am hochfahren', err);
      return;
    }
    connected = true;
    console.log("Connected to MySQL server");
    connection.release();  
    //abort the function delayConnection
    return;
  });
  //Wenn keine Verbindung besteht wird die Funktion nach einer Sekunde erneut aufgerufen
  if (!connected) {
    setTimeout(delayConnection, 5000);
  }
}

//Ausführen der Funktion delayConnection
delayConnection();

// Funktion welche die Daten aus dem Formular entgegen nimmt und in die Datenbank schreibt
app.post('/submit', (req, res) => {
  const { name } = req.body;
  const pool = mysql.createPool(mysqlConfig);
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error inserting into the database:', err);
      return;
    }
    pool.query('INSERT INTO meineDatenbank.names (name) VALUES (?)', [name], (err, result) => {
      if (err) {
        console.error('Error inserting into the database:', err);
        return;
      }
      res.send('Inserted into the database');
      console.log('Inserted into the database');
      connection.release();
    });
  });
});


app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, '')));
  app.use(bodyParser.urlencoded({ extended: true }));
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });


