const express = require('express'); 
const hostname = '127.0.0.1';

const port = 3053;
const sqlite3 = require('sqlite3').verbose(); 
const app = express();
const DBPATH = 'dbUser.db';
const SQL_SELECT = 'SELECT * FROM tbUser WHERE userId = 1'
app.use(express.static("../frontend/"));
app.get('/user0', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');  
  var db = new sqlite3.Database(DBPATH);  
  db.get(SQL_SELECT, [], (err, row) => {
    if (err) { 
      throw err;
    }
    res.write("<h1> Teste do banco de dados</h1>") 
    res.write("<h4> Informacoes do usuario cujo id = 1: </h2>") 
	  res.write("<h3> title     = " + row.title  + "</h3>"); 
    res.write("<h3>userId    = " +  row.userId  + "</h3>"); 
    res.write("<h3>userId    = " +  row.id      + "</h3>"); 
    res.end("<h3> completed = " +   row.completed); 	  
   });
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`BD server running at http://${hostname}:${port}/user0`);
});