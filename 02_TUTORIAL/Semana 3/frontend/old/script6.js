var listaAlunos = [];
var Aluno = {
    nomeAluno: "",
    periodoAluno:0,
    mediaNota: 0,
    listaNotas: []
};
function adicionaAluno(){
    var nome = document.getElementById("nomealuno").value;
    var periodo = document.getElementById("periodoaluno").value;
    var aluno = Object.create(Aluno);
    aluno.nomeAluno = nome;
    aluno.periodoAluno = periodo;
    listaAlunos.push(aluno);
    document.getElementById("nralunos").textContent = String(listaAlunos.length);
};
function mostraAlunos(){
    var lista = "<table>";
    for(var i=0 ; i<listaAlunos.length ; i++){
        lista += "<tr>";
        lista += "<td>" + listaAlunos[i].nomeAluno + "</td>";
        lista += "<td>" + listaAlunos[i].periodoAluno + "</td>";
        lista += "</tr>";

    }
    lista += "</table>"
    document.getElementById("listaluno").innerHTML = lista;
}
