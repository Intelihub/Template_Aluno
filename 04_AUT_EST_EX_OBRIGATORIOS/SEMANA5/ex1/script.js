function Calcular() {
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var resultado = null
    if (document.getElementById("soma").checked) {
        resultado = parseFloat(n1) + parseFloat(n2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
    if (document.getElementById("diminuicao").checked) {
        resultado = parseFloat(n1) - parseFloat(n2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
    if (document.getElementById("multiplicacao").checked) {
        resultado = parseFloat(n1) * parseFloat(n2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
    if (document.getElementById("divisao").checked) {
        resultado = parseFloat(n1) / parseFloat(n2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
    // if (document.getElementById("barrabarra").checked) {
    //     resultado = parseFloat(n1) ? parseFloat(n2);
    //     document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    // }
    if (document.getElementById("resto").checked) {
        resultado = parseFloat(n1) % parseFloat(n2);
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
}