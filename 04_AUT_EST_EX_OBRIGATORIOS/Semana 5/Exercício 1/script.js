﻿var v1 = 0;
var v2 = 0;

//Abaixo estão as funções de cálculos

function somar(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    var op = "+";
    var result = parseFloat(v1) + parseFloat(v2);
    ShowOp(v1, v2, op);
    ShowResult(result);
}

function subtrair(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    var op = "-";
    var result = parseFloat(v1) - parseFloat(v2);
    ShowOp(v1, v2, op);
    ShowResult(result);
}

function multiplicar(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    var op = "*";
    var result = parseFloat(v1) * parseFloat(v2);
    ShowOp(v1, v2, op);
    ShowResult(result);
}

function dividir(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    var op = "/";
    var result = parseFloat(v1) / parseFloat(v2);
    ShowOp(v1, v2, op);
    ShowResult(result);
}

function dividint(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    // Operação para resultar um valor inteiro de uma divisão
    var op = "//";
    var divint = parseFloat(v1) / parseFloat(v2);
    var resultdivint = Math.round(divint);
    var result;
    if (resultdivint > divint && (resultdivint > 0)) {
        result = resultdivint - 1;
    };
    if (resultdivint < divint && (resultdivint > 0)) {
        result = resultdivint;
    };
    if (resultdivint > divint && (resultdivint < 0)) {
        result = resultdivint;
    };
    if (resultdivint < divint && (resultdivint < 0)) {
        result = resultdivint + 1;
    };
    if (resultdivint == 0) {
        result = resultdivint;
    };
    if (resultdivint == divint) {
        result = resultdivint;
    };

    ShowOp(v1, v2, op);
    ShowResult(result);
}

function dividiresto(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v1 = v0;
    };
    var v02 = document.getElementById("value2").value
    if (v02 != 0) {
        v2 = v02;
    };

    var op = "%";
    var result = parseFloat(v1) % parseFloat(v2);
    ShowOp(v1, v2, op);
    ShowResult(result);
}

// Função que mostra a operação realizada
function ShowOp(v1, v2, op){
    document.getElementById("calc").innerHTML += "<br />"+v1+""+op+""+v2+" = ";
}


// Função que mostra o resultado obtido
function ShowResult(result){
    document.getElementById("calc").innerHTML += result;
    v0 = 0
}
