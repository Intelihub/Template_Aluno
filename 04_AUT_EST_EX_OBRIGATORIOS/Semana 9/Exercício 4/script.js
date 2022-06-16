function Fibonacci(){
    //Pega o valor da entrada como número
    var number = Number(document.getElementById("number").value);
    //Cria uma variável de valor inícial igual a 1
    var j = parseInt(1);
    //Cria uma lista
    var fibonacci = [];
    
    //Enquanto as variáveis forem menores que a entrada, elas se somarão entre sí, adicionando cada valor à lista
    for(var i=0; i<=number; i+=j){
        if(i<=number){
            fibonacci.push(i);
        };
        j += i;
        if(j<=number){
            fibonacci.push(j);
        };
    };

    //Escreve na página os números de Fibonacci
    document.getElementById("fibonacci").innerHTML = `<h2>${fibonacci}</h2>`;
};