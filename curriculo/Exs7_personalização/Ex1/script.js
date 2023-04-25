var qtd = 0
var valor = 0
var preco = 8
var resultado

function less() {
    qtd -= 1;
    valor -= 8;
    document.getElementById("quantValor").innerHTML = qtd;
    document.getElementById("valorValor").innerHTML = (Number(qtd)*preco);
    document.getElementById("entrada").value = qtd;
}

function plus() {
    qtd += 1;
    valor += 8;
    document.getElementById("quantValor").innerHTML = qtd;
    document.getElementById("valorValor").innerHTML = (Number(qtd)*preco);
    document.getElementById("entrada").value = qtd;
}

function save() {
    qtd = Number(document.getElementById("entrada").value);
    document.getElementById("quantValor").innerHTML = qtd;
    document.getElementById("valorValor").innerHTML = (Number(qtd)*preco);
}