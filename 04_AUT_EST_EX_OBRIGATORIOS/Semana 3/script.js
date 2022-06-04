/* 
=======================
Declaração de variáveis
=======================
*/

var calcResDiv = "calc";
var v0 = 0
var g = 10

/* 
=======================
Funções
======================= 
*/

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function CalcAndShow(){
    var op = "**2)/(2*";
    var Velocidade_Inicial = document.getElementById("vi").value
    if (Velocidade_Inicial != 0) {
        v0 = Velocidade_Inicial
    };
    var result = Calc(v0, g, op);
    ShowOp(v0, g, op);
    ShowResult(result);
}


/* Função que calcula uma operação entre dois números recebidos como parâmetro */
function Calc(v0, g, op){
    var result;
    if (op == "**2)/(2*") {
        result = (v0**2)/(2*g);
    };
    return result;
}


/* Função que mostra a operação realizada */
function ShowOp(v0, g, op){
    document.getElementById(calcResDiv).innerHTML += "<br />("+v0+""+op+""+g+") = ";
}


/* Função que mostra o resultado obtido */
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
    v0 = 0
}
