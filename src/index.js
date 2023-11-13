const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');

const mysqlConfig = {
  host: "mysql_server",
  user: "wi22254",
  password: "passwort",
  database: "meineDatenbank"
}

//let con = null

const app = express()
const port = 3000

/*
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
*/

const con = mysql.createConnection(mysqlConfig);
con.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log("Connected to MySQL server");
  connect.query('SELECT * FROM meineDatenbank.names', (err, result) => {
    if (err) {
      console.error('Error inserting into the database:', err);
      return;
    }
    console.log(result);
  }
  );
}
);

// Funktion welche den Pfad für die statischen Dateien festlegt
app.use(express.static(path.join(__dirname, '')));
// Funktion welche das routing für die index.html festlegt
app.get('/', (req, res) => {
    //Antwort mit der index.html Datei
    res.sendFile(path.join(__dirname, 'index.html'));
  });


app.use(bodyParser.urlencoded({ extended: false }));





/*
app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) {
      console.error('Error inserting into the database:', err);
      return;
    }
    res.send('connected')
    console.log("Connected to MySQL server");
    connect.query('SELECT * FROM meineDatenbank.names', (err, result) => {
      if (err) {
        console.error('Error inserting into the database:', err);
        return;
      }
      console.log(result);
    }
    );
})
})
*/

// Funktion welches sich um das einfügen der Daten in die Datenbank kümmert, beim submitten der Eingabe
app.post('/submit', function (req, res) {
    // Funktion welche die Daten aus dem Formular entgegen nimmt
    const { name } = req.body;
    //Funktion welche die Daten in die Datenbank einfügt
    con.query('INSERT INTO meineDatenbank.names (name) VALUES (?)', [name], (err, result) => {
        if (err) {
          console.error('Error inserting into the database:', err);
          return;
        }
        // Nach erfolgreichem einfügen wird zurück auf die index.html geleitet
        res.redirect('/');
        });
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });


