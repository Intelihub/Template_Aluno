const path = require("path");

// Importa as configurações do app
require("dotenv").config({ encoding: "utf8", path: path.join(__dirname, "../.env") });

// Configura o cache da view engine EJS, para armazenar as
// 200 últimas páginas já processadas, por ordem de uso.
const ejs = require("ejs");
const LRU = require("lru-cache");
ejs.cache = new LRU({
	max: 200
});

const express = require("express");
const app = express();


// Configura o diretório de onde tirar as views.
app.set("views", path.join(__dirname, "../views"));
// Define o view engine como o ejs.
// https://ejs.co/
app.set("view engine", "ejs");

// **********************************************************
// Os middlewares são executados na ordem que são instalados!
// **********************************************************

// Configura o middleware de arquivos estáticos para responder às
// rotas iniciadas por "/public", servindo o conteúdo da pasta "../public".
app.use("/public", express.static(path.join(__dirname, "../public"), {
	// Aqui estamos configurando o cache dos arquivos estáticos... Muito
	// útil em ambientes de produção, mas deve-se ter cuidado durante a
	// fase de desenvolvimento.
	cacheControl: false,
	etag: false,
	maxAge: "30d"
}));

// Configura o middleware que lê cookies. Ele está aqui, abaixo do middleware
// de arquivos estáticos, porque não precisamos de cookies para servir arquivos
// estáticos.
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// Configura os middlewares responsáveis por fazer o parse do conteúdo do body
// quando ele for um JSON, ou um form convencional.
// http://expressjs.com/en/api.html#express.json
app.use(express.json());
// http://expressjs.com/en/api.html#express.urlencoded
app.use(express.urlencoded({ extended: true }));

// Esse middle serve para evitar cache das páginas e api no geral. Ele também fica
// aqui, depois do middleware de arquivos estáticos, pois os arquivos static devem
// usar cache em ambiente de produção.
app.use((req, res, next) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	next();
});

// Especifica quais módulos serão responsáveis por servir cada rota, a partir dos
// endereços requisitados pelo cliente.
//
// A string no primeiro parâmetro representa o começo do caminho requisitado. Vamos
// ver alguns exemplos de caminhos, e como eles seriam tratados pelo Express, assumindo
// a existência dos seguintes tratadores:
//
// - index, registrado com o prefixo "/", e com as rotas internas "/" e "/outra"
// - usuario, registrado com o prefixo "/usuario", e com as rotas internas "/" e "/novo"
//
// Caminho completo pedido pelo cliente  Caminho repassado para o tratador   Tratador e resultado
// /                                     /                                   index (OK)
// /usuario                              /                                   usuario (OK)
// /usuario/novo                         /novo                               usuario (OK)
// /usuario/alterar                      /alterar                            usuario (Erro, não temos /alterar em usuario)
// /outra                                /outra                              index (OK)
// /usuarioteste                         /usuarioteste                       index (Erro, não temos /usuarioteste em index)
//
// https://expressjs.com/en/guide/routing.html

app.use("/", require("./routes/index"));
app.use("/funcionarios", require("./routes/funcionarios"));
app.use("/projetos", require("./routes/projetos"));
app.use("/escola", require("./routes/escola"));
app.use("/curriculo", require("./routes/curriculo"));
// Depois de registrados todos os caminhos das rotas e seus tratadores, registramos
// os tratadores que serão chamados caso nenhum dos tratadores anteriores tenha
// devolvido alguma resposta.
//
// O Express diferencia um tratador regular (como os anteriores) de um tratador
// de erros, como esse aqui abaixo, pela quantidade de parâmetros!!!
//
// Isso é possível, porque em JavaScript, f.length retorna a quantidade
// de parâmetros declarados na função f!!!
app.use((req, res, next) => {
	// Esse aqui é um tratador comum, que será executado ao final da lista,
	// quando nenhum outro tratador retornou algum conteúdo. Ou seja...
	// O que o cliente pediu não foi encontrado!
	const err = new Error("Não encontrado");
	err.status = 404;

	// Executa o próximo tratador na sequência passando apenas o erro,
	// de modo que esse caso particular seja tratado como um erro qualquer
	// do sistema.
	next(err);
});

app.use((err, req, res, next) => {
	// Se nenhum status foi definido até aqui, definimos o status 500.
	const status = err.status || 500
	res.status(status);

	// Em vez de send, poderíamos ter utilizado render() para devolver
	// uma página de verdade.
	res.send("Erro " + status + " ocorrido: " + (err.message || err.toString()));
});

const server = app.listen(parseInt(process.env.PORT), process.env.IP, () => {
	console.log("Servidor executando na porta " + server.address().port);
});
