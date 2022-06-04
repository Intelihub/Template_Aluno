function list(){
    // Classifica os valores obtidos como textos
    var values = String(document.getElementById("values").value);
    var focus = String(document.getElementById("focus").value);

    var vdiv = values.split(",");
    vdiv.sort();
    
    // Condição para encontrar o valor foco, além de ordenar e achar a posição desse valor
    if (vdiv.includes(focus)){
        var focuspos = vdiv.indexOf(focus);
        document.getElementById("result").innerHTML += ""+vdiv+"<br/>Posição "+(parseInt(focuspos) + 1)+"<br/><br/>";
    }

    else{
        document.getElementById("result").innerHTML += ""+vdiv+"<br/>O foco não pertence à lista<br/><br/>";
    };
}