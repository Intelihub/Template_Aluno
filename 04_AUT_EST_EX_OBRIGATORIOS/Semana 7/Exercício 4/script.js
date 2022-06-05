var person = 0;
var day = "day";
var night = "night";
var purchase;

function CalcValue(){
    //Pega os valores do total a se comprar e do período
    var people = document.getElementById("value").value;
    
    if (people > 0) {
        person = people;
    }
    else {
        person = 0;
    };
    
    var time = document.getElementById("time").value;

    //Cálculo do total da compra considerando a quantidade de pessoas e o período
    if (time == day) {
        if (person > 50) {
            purchase = parseInt(person) * 200 * 0.6;
        }
        else {
            purchase = parseInt(person) * 200;  
        };
    }
    
    else if (time == night) {
        if (person > 50) {
            purchase = parseInt(person) * 100 * 0.8;
        }
        else {
            purchase = parseInt(person) * 100;  
        };
    };

    ShowValue(purchase);
};

//Função que mostra o valor total da compra
function ShowValue(purchase) {
    document.getElementById("calc").innerHTML = "<h2>O valor total da compra será R$"+purchase+",00</h2>";
}