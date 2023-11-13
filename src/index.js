const express = require('express');
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "wi22254",
  password: "passwort",
  database: "meineDatenbank"
}

let con = null

const app = express()
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
    console.log("Connected to MySQL server");
  });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });


