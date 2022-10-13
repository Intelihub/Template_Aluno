var v = 0;

//Função que pega o valor do produto
function GetV(){
    var v0 = document.getElementById("value1").value;
    if (v0 != 0) {
        v = v0;
    };
    Show(v);
}

//Função que aumenta o valor do produto
function increase(){
    v = parseInt(v) + 1;
    Show(v);
}

//Função que diminuí o valor do produto
function decrease(){
    v = parseInt(v) - 1;
    Show(v);
}

// Função que mostra o valor final
function Show(v){
    document.getElementById("calc").innerHTML = "<h2>"+v+"</h2>";
}
