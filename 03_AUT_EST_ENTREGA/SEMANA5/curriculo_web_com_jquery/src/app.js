// recursos
const express = require('express');
const res = require('express/lib/response');
const sqlite3 = require('sqlite3');

// cria o servidor 
const app = express();

const hostname = '127.0.0.1';
const port = 3000;
app.use(express.static("public"));

// "ouve" a conexão com o servidor 
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});