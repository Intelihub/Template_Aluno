function calculate(){
    var preco
    var desconto
    var resultado
    var qtd = Number(document.getElementById("pessoas").value)
    let condicao = Number($('input[name="turno"]:checked').val())
    if (condicao == 200) {
        if (qtd <= 50) {
            preco = 200;
            resultado = qtd*preco;
            $("#result").html("Valor total: " + resultado);
        } else {
            preco = 200 - 40/100*200;
            resultado = qtd * preco;
            $("#result").html("Valor total: " + resultado);
        }
    } 
    else if (condicao == 100) {
        if (qtd <= 50) {
            preco = 100;
            resultado = qtd*preco;
            $("#result").html("Valor total: " + resultado);
    }   else {
        preco = 100 - 20/100*100;
        resultado = qtd * preco;
        $("#result").html("Valor total: " + resultado);
    }   
    }
    else {
        $("#result").html("Você não selecionou um período ainda")
    }
}