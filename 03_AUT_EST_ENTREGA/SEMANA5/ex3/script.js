function Calcular() {

    var stringhtml = document.getElementById("listaNumeros").value;
    var lista = JSON.parse("[" + stringhtml + "]");
    var valorFoco = document.getElementById("valorFoco").value;

    // Selecionar a posição do valor foco
    for (i = 0; i <= lista.length; i++) {
        if (valorFoco == lista[i]) {
            document.getElementById("posValorFoco").innerHTML = "Posição do valor foco: " + (i + 1);
            document.getElementById("posValorFocoArray").innerHTML = "Posição do foco em relação ao Array: " + i;
        };
    };

    // Bubblesort para ordenar a lista 
    var v1
    var v2
    var temp
    for (i = 0; i <= lista.length; i++) {
        for (j = 0; j <= lista.length; j++) {
            if (lista[j] > lista[j + 1]) {
                temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }

    // Escrever a lista ordenada de um jeito bonito e formatado
    var listaOrdenada = ""
    for (i = 0; i <= lista.length - 1; i++) {
        listaOrdenada += lista[i];
        if (i < lista.length - 1) {
            listaOrdenada += ", ";
        }
    }
    document.getElementById("listaOrdenada").innerHTML = "Lista ordenada: " + listaOrdenada;
}