function exe() {
    var vetor = [13, 5, 2, 1, 3, 8];
    //laço que passa por todos os elementos 
    for (i = 0; i < vetor.length; i++) {
        // laço que compara vetor[i] com o restante do vetor 
        for(){}
            if (vetor[i] > vetor[i + 1]) {
                n1 = vetor[i];
                n2 = vetor[i + 1];
                vetor[i] = n2;
                vetor[i + 1] = n1;
            }
            console.log(i + " - " + vetor[i])
    }
}
