const express = require('express'); 
const hostname = '127.0.0.1';
const port = 3054;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dbUser.db';
const SQL_SELECT = 'SELECT * FROM tbUser WHERE userId = '
app.use(express.static("../frontend/"));
app.use(express.json())
app.get('/user01', (req, res) => {
  res.statusCode = 200;  
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  var db = new sqlite3.Database(DBPATH);  
  db.get(SQL_SELECT + req.query.userid , [], (err, row) => {
    if (err) { 
      throw err;
    }
    res.json(row);	  
   });
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/user01`);
});