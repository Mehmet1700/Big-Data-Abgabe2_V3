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

const app = express()
const port = 3000

//Middleware zum parsen von JSON in der Anfrage
app.use(express.json());


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
    //Verbindung schließen
    return;
  });
  //Wenn keine Verbindung besteht wird die Funktion nach einer Sekunde erneut aufgerufen
  if (!connected) {
    setTimeout(delayConnection, 5000);
  }
}

//Ausführen der Funktion delayConnection
delayConnection();


app.get('/', (req, res) => {
  app.use(express.static(path.join(__dirname, '')));
  app.use(bodyParser.urlencoded({ extended: true }));
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.get('/getAll', (req, res) => {
  //Testen von /getAll
  console.log('getAll function called');
  //Verbindung zum Server aufbauen
  const connection = mysql.createConnection(mysqlConfig);
  const query = "SELECT * FROM names;";
  //Query ausführen
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data from MySQL:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    //Ausgabe der Daten zum testen
    //console.log(results);
    res.json({data : results});
  });
  //Verbindung schließen
  connection.end();
});


// Datenbank Eintrag erstellen.
app.post('/insert', (request, response) => {
  //testen von /insert
  console.log('insert function called');
  //Daten aus dem Formular entgegennehmen
  const name  = request.body.name;
  console.log(name);
  //Verbindung zum Server aufbauen
  const connection = mysql.createConnection(mysqlConfig);
  const query = "INSERT INTO names (name) VALUES (?);";
  //Query ausführen
  connection.query(query, [name], (err, results) => {
    if (err) {
      console.error('Error inserting into the database:', err);
      return;
    }
    // Rückgabe der eingefügten Daten als JSON
    const insertedData = {
      name: name
    };
    
    response.json({ data: insertedData });
    console.log('Inserted into the database');
  });

});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });


