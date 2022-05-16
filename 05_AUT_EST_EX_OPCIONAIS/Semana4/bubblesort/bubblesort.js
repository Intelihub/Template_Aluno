function exe() {
    var vetor = [13, 5, 2, 1, 3, 8];
    //laço que passa por todos os elementos 
    for (c = 0; c > vetor.length - 1; c++) {
        // laço que compara vetor[i] com o restante do vetor 
        for (i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                n1 = vetor[i];
                n2 = vetor[i + 1];
                vetor[i] = n2;
                vetor[i + 1] = n1;
            }
        }
    }
}
