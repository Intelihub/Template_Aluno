function check() {
    var numero = document.getElementById("phoneNumber").value 
    if (numero.length > 13) {
        alert("Formato não aceito, siga o exemplo abaixo:\n(00)0000-0000")
    }
    else if (numero.length < 13) {
        alert("Formato não aceito, siga o exemplo abaixo:\n(00)0000-0000")
    }
    else if (numero[0] == "(" && numero[3] == ")" && numero[8] === "-") {
        alert("Formato aceito")
    }
}