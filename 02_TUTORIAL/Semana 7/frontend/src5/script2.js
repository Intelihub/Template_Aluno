/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "#calc";
var getResDiv = "#get";
var getDBResDiv = "#getDB";



/* Função que faz um requisição GET no nosso banco de dados */
function TestGETDB(){
    var url = "http://127.0.0.1:3071/users";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    
    $(getDB).append("<br /><br />" + JSON.stringify(resposta));
    $(getDB).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
    //console.log(xhttp.responseText);
};







function TestGETDB2(){
    var url = "http://127.0.0.1:3071/users_individuais";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);
    var dadoEnviado = {dados: "oi mamae"};
    xhttp.send(JSON.stringify(dadoEnviado));//A execução do script pára aqui até a requisição retornar do servidor


    
    $(getDB2).append("<br /><br />" + xhttp.responseText);

}