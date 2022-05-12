const res = require("express/lib/response");

function calcular() {
    var notasDe1 = 0;
    var notasDe5 = 0;
    var notasDe10 = 0;

    var saque = document.getElementById('saque').value;
    if (saque >= 10) {
        notasDe10 = Math.trunc(saque / 10);
        var resto = saque % 10;
        saque = resto;
        document.getElementById('outputNotas10').innerHTML = notasDe10 + " nota(s) de 10 reais";
    }
    if (saque >= 5) {
        notasDe5 = Math.trunc(saque / 5);
        resto = saque % 5;
        saque = resto;
        document.getElementById('outputNotas5').innerHTML = notasDe5 + " nota(s) de 5 reais";
    }
    if (saque >= 1) {
        notasDe1 = saque / 1;
        document.getElementById('outputNotas1').innerHTML = notasDe1 + " moeda(s) de 1 real";
    }
    var notasTotais = notasDe10 + notasDe5 + notasDe1;
    document.getElementById('outputNotasTotais').innerHTML = "Total de notas: " + notasTotais;
}