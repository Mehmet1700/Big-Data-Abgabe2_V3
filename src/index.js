const express = require('express');
const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "dan",
  password: "secret",
  database: "test_db"
}

let con = null

const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/connect', function (req, res) {
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

app.listen(3000)

console.log("listening on port 3000")




/*

// MySQL Config
const mysqlConfig = {
    host: "mysql_server",
    user: "dan",
    password: "secret",
    database: "test_db"
  }

const connection = mysql.createConnection(mysqlConfig);
// Connect to MySQL
connection.connect((err) => {
    if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
    }
    console.log('Connected to MySQL server');
});



app.get('/', (req, res) => {
res.send('Hello, this is your Node.js server!');
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});

*/