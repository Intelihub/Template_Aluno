function names(){
    // Classifica os valores obtidos como textos
    var values = String(document.getElementById("values").value);
    //Separa os valores por vírgulas
    var valuesplit = values.split(",");
    //Cria uma lista
    var names = [];

    //Coloca todos os valores em uma nova lista e sem espaços iniciais e finais
    for(var i=0; i<valuesplit.length; i++){
        names.push(String(valuesplit[i]).trim());
        console.log(names);
    };

    //Ordena a nova lista pelo alfabeto e ignora acentuações
    var namesorder = names.sort(function(a,b){return a.localeCompare(b)});

    //Escreve na página os nomes por ordem alfabética
    document.getElementById("order").innerHTML = `<h2>${namesorder}</h2>`;
}