
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3041;

app.use(express.static("../frontend/"));

app.listen(port, hostname, () => {
  console.log("Executando Versao 2 do servidor do TUTORIAL 04")
  console.log(`Servidor Rodando paginas basicas em http://${hostname}:${port}/`);
  console.log(`Servidor Rodando teste1 em http://${hostname}:${port}/teste1`);
});