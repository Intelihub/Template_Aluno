// recursos
const express = require('express');
const res = require('express/lib/response');
const sqlite3 = require('sqlite3');

// cria o servidor 
const app = express();

app.use(express.json());

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static("frontend"));

// "ouve" a conexão com o servidor 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const DBPATH = 'backend/banco.db';

app.get('/competencias', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM competencias';
    db.get(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

app.get('/formacaoAcademica', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM formacaoAcademica';
    db.get(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});

app.get('/informacoesContato', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    var db = new sqlite3.Database(DBPATH);
    var sql = 'SELECT * FROM informacoesContato';
    db.get(sql, [], (err, row) => {
        if (err) {
            throw err;
        }
        res.json(row);
    });
});
