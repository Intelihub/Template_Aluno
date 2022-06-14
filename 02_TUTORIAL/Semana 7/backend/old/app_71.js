const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'dbUser.db';

const hostname = '127.0.0.1';
const port = 3071;
const app = express();

/* Servidor aplicação */

app.use(express.static("../frontend/src1"));


/* Definição dos endpoints */

/******** CRUD ************/

app.use(express.json());

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
		res.json(rows);
	});
	db.close(); // Fecha o banco
});



// Retorna todos registros (é o R do CRUD - Read)
app.post('/users_individuais',urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = 'SELECT * FROM tbUser ORDER BY title COLLATE NOCASE';
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    throw err;
		}
	//	res.write("<!DOCTYPE html> <head> <title> Resultados </title></head> <body>");
		console.log(req.dados);
		res.write("<table border='5'>");
		var cabecalho = Object.keys(rows[0]); 
		res.write("<tr>");
		for(var j=0 ; j < cabecalho.length; j++){
			res.write("<td>");				
			res.write(String(cabecalho[j]));

			res.write("</td>");
		}
		res.write("</tr>");		


		for(var i=0 ; i < rows.length ; i++){
			var linha = Object.values(rows[i]); 
			res.write("<tr>");
			for(var j=0 ; j < linha.length; j++){
				res.write("<td>");				
				res.write(String(linha[j]));
				res.write("</td>");
			}
			res.write("</tr>");
		}
		
		res.write("</table>");
		res.write("</body> </html>");
		res.end();
	});
	db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "INSERT INTO tbUser (title, id, completed) VALUES ('" + req.body.title + "', 33, false)";
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
	});
	db.close(); // Fecha o banco
	res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/userupdate', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	//res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "UPDATE tbUser SET title = '" + req.body.title + "' WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/userdelete', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

	sql = "DELETE FROM tbUser WHERE userId = " + req.body.userId;
	var db = new sqlite3.Database(DBPATH); // Abre o banco
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	db.close(); // Fecha o banco
});

app.listen(port, hostname, () => {
  console.log(`Page server running at http://${hostname}:${port}/`);
});