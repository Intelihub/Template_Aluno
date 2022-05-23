var vp = 0;
var nota100 = 0;
var nota50 = 0;
var nota20 = 0;
var nota10 = 0;
var nota5 = 0;
var nota2 = 0;
var nota1 = 0;

function CalcNotas(vp){
    var v0 = document.getElementById("value").value;
    if (v0 != 0) {
        vp = v0;
    };

    while (vp >= 100) {
        parseInt(vp) -= 100;
        nota100 += 1;
    }
    while (vp >= 50) {
        parseInt(vp) -= 50;
        nota50 += 1;
    }
    while (vp >= 20) {
        parseInt(vp) -= 20;
        nota20 += 1;
    }
    while (vp >= 10) {
        parseInt(vp) -= 10;
        nota10 += 1;
    }
    while (vp >= 5) {
        parseInt(vp) -= 5;
        nota5 += 1;
    }
    while (vp >= 2) {
        parseInt(vp) -= 2;
        nota2 += 1;
    }
    while (vp >= 1) {
        parseInt(vp) -= 1;
        nota1 += 1;
    }
    if (vp = 0) {
        ShowNotas(nota100, nota50, nota20, nota10, nota5, nota2, nota1);
    }
}

function ShowNotas(vp, nota100, nota50, nota20, nota10, nota5, nota2, nota1){
    document.getElementById("notas").innerHTML += "<br />"+nota100+" notas de R$100 "+nota50+" notas de R$50 "+nota20+" notas de R$20 "+nota10+" notas de R$10 "+nota5+" notas de R$5 "+nota2+" notas de R$2 "+nota1+" notas de R$1";
    vp = 0; nota100 = 0; nota50 = 0; nota20 = 0; nota10 = 0; nota5 = 0; nota2 = 0; nota1 = 0;
}