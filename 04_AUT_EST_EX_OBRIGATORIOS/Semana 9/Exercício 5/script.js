function prime(){
    //Pega os valores das entradas como números
    var number1 = Number(document.getElementById("value1").value);
    var number2 = Number(document.getElementById("value2").value);
    //Cria uma lista
    var primes = [];

    //Verifica se o valor de entrada são inteiros, se não, alerta o usuário
    if(Number.isInteger(number1) && Number.isInteger(number2)){

        //Permite que o usuário escreva corretamente o valor numérico nas entradas
        if(number1 < number2){
            var n1 = number1;
            var n2 = number2;
        }else{
            n1 = number2;
            n2 = number1;
        };

        //Verifica número por número entre os valores solicitados, e adiciona na lista quando acha um primo
        for(var i=n1; i<=n2; i++){
            var prime = true;
            for(var j=2; j<i; j++){
                if(i % j == 0){
                    prime = false;
                    break;
                };
            };
            if(prime && i>1) primes.push(i);
        };

        //Escreve na página os números primos
        document.getElementById("primes").innerHTML = `<h2>${primes}<h2/>`;

    }else alert("Apenas valores inteiros");
}