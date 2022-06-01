function Adicionar() {
    var n = document.getElementById("quantidade").value;
    if (n == "") {
        n = parseFloat(0);
    };
    n = parseFloat(n);
    n += 1;
    document.getElementById("quantidade").value = parseFloat(n);
}

function Subtrair() {
    var n = document.getElementById("quantidade").value;
    if (n == "") {
        n = parseFloat(0);
    };
    n = parseFloat(n);
    n += -1;
    document.getElementById("quantidade").value = parseFloat(n);
}