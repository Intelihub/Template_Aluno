function CalcNotas() {
    var vp = 0;
    var nota100 = 0;
    var nota50 = 0;
    var nota20 = 0;
    var nota10 = 0;
    var nota5 = 0;
    var nota2 = 0;
    var nota1 = 0;
    
    var v0 = document.getElementById("value").value;

    // Condição para não travar o documento
    if (v0 > 1000000000) {
        document.getElementById("notas").innerHTML += "<h4>ERRO: VALOR MUITO GRANDE</h4>"
    }
    if (v0 != 0 && v0 <= 1000000000) {
        vp = v0;
    };

    // Subtrai o valor do produto com a nota de maior valência possível, e soma a quantidade de notas usadas
    while (vp >= 100) {
        vp -= 100;
        nota100 += 1;
    }
    while (vp >= 50) {
        vp -= 50;
        nota50 += 1;
    }
    while (vp >= 20) {
        vp -= 20;
        nota20 += 1;
    }
    while (vp >= 10) {
        vp -= 10;
        nota10 += 1;
    }
    while (vp >= 5) {
        vp -= 5;
        nota5 += 1;
    }
    while (vp >= 2) {
        vp -= 2;
        nota2 += 1;
    }
    while (vp >= 1) {
        vp -= 1;
        nota1 += 1;
    }

    // Mostra a quantidade de notas usadas e seus respectivos valores
    if (v0 <= 1000000000) {
    document.getElementById("notas").innerHTML += "<h4>Valor do Produto: R$"+v0+"</h4>"+nota100+" de R$100<br />"+nota50+" de R$50<br />"
    +nota20+" de R$20<br />"+nota10+" de R$10<br />"+nota5+" de R$5<br />"+nota2+" de R$2<br />"+nota1+" de R$1<br /><br />";
    }
}
