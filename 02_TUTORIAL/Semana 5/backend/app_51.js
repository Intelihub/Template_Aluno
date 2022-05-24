const express = require('express'); 
const hostname = '127.0.0.1';
const port = 3051;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dbUser.db';
app.use(express.static("../frontend/"));
app.use(express.json())
app.get('/user1', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  var db = new sqlite3.Database(DBPATH);
  var sql = 'SELECT * FROM tbUser WHERE userId = 1';
  db.get(sql, [], (err, row) => {
    if (err) {
      throw err;
    }
	  res.json(row);
   });
});
/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/`);
});