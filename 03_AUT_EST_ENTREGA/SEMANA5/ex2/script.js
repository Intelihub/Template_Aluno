function Calcular() {
    var notas100 = 0;
    var notas50 = 0;
    var notas20 = 0;
    var notas10 = 0;
    var notas10 = 0;
    var notas5 = 0;
    var ntoas1 = 0;
    resultado = document.getElementById("resultado").innerHTML = "";
    var preco = parseFloat(document.getElementById("preco").value);
    if (preco >= 100) {
        notas100 = Math.trunc(preco / 100);
        var resto = preco % 100;
        preco = resto;
        resultado += "Notas de 100: " + notas100;
    }
    if (preco >= 50) {
        notas50 = Math.trunc(preco / 50);
        var resto = preco % 50;
        preco = resto;
        resultado += "<br> Notas de 50: " + notas50;
        console.log(notas50);
    }
    if (preco >= 20) {
        notas20 = Math.trunc(preco / 20);
        var resto = preco % 20;
        preco = resto;
        resultado += "<br> Notas de 20: " + notas20;
        console.log(notas20);
    }
    if (preco >= 10) {
        notas10 = Math.trunc(preco / 10);
        var resto = preco % 10;
        preco = resto;
        resultado += "<br> Notas de 10: " + notas10;
        console.log(notas10);
    }
    if (preco >= 5) {
        notas5 = Math.trunc(preco / 5);
        var resto = preco % 5;
        preco = resto;
        resultado += "<br> Notas de 5: " + notas5;
        console.log(notas5);
    }
    if (preco >= 1) {
        notas1 = Math.trunc(preco / 1);
        var resto = preco % 1;
        preco = resto;
        resultado += "<br> Moedas de 1: " + notas1;
        console.log(notas1);
    }
    document.getElementById("resultado").innerHTML = resultado;
};