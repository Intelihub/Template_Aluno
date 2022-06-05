var count = true

//Função que pega os valores das caixas de texto
function change(){  
    var txt1 = (document.getElementById("value1").value);
    var txt2 = (document.getElementById("value2").value);

    Show(txt1, txt2);

}

// Função que mostra os valores das caixas de texto alternando-os com clicks
function Show(txt1, txt2){
    if (count) {
        document.getElementById("calc").innerHTML = "<h2>"+txt2+"</h2><h2>"+txt1+"</h2>";
        count = false
    }
    else {
        document.getElementById("calc").innerHTML = "<h2>"+txt1+"</h2><h2>"+txt2+"</h2>";
        count = true
    }
}