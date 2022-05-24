function list(){
    // Classifica os valores obtidos como textos
    var values = String(document.getElementById("values").value.split(",").sort());
    var focus = String(document.getElementById("focus").value);
    
    // Condição para encontrar o valor foco, além de ordenar e achar a posição desse valor
    if (values.includes(focus)){
        var focuspos = values.indexOf(focus);
        document.getElementById("result").innerHTML += ""+values+"<br/>Posição "+(parseInt(focuspos) + 1)+"<br/><br/>";
    }

    else{
        document.getElementById("result").innerHTML += ""+values+"<br/>O foco não pertence à lista<br/><br/>";
    };
}