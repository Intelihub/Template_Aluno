function Calc() {
    //Pega os valores do input e os separa em array
    var number = document.getElementById("value").value;
    var numbersplit = number.split('');
    console.log(numbersplit);
    //Pega o primeiro valor do array (centena)
    var cent = parseInt(numbersplit[0]);
    
    //Condição que satisfaz o valor de entrada ter somente centenas inteiras 
    if (number < 100 || numbersplit.length != 3) alert("Apenas Centenas Inteiras")
    else {//Divide o valor do algarismo da centena por 2, se o resto for 0, então par, se não, ímpar.
        if(cent % 2 == 0) document.getElementById("pairodd").innerHTML = "<h2>A centena é par</h2>";
        else document.getElementById("pairodd").innerHTML = "<h2>A centena é ímpar</h2>";
    }
}