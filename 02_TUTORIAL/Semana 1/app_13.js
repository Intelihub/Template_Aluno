// Recursos
var express = require('express'); // Recurso para Express - para instalar o Express: npm install express --save

// Definições da URL do endpoint
var hostname = '127.0.0.1';
var port = 3013;

// Cria o servidor
var app = express();

app.get('/', (req, res) => {
	req.query.nome
	req.query.nome2
	res.write("<h1> Etapa 1 - INSTALACAO - EndPoint GET</h1>")
	res.end("<h2>Hello " + req.query.nome + " e também " + req.query.nome2 + " voce conseguiu um GET! bem sucedido</h2>");
	// http://127.0.0.1:3013/?nome2=Giovana&nome=Fulano
});

// Inicia o servidor
app.listen(port, hostname, () => {
	console.log('Servidor rodando em http://' + hostname + ':' + port);
})




