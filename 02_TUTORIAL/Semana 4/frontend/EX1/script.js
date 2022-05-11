
var DisciplinaHogwarts = {
    nomeDisciplina: "",
    notasAlunos: [],
    pesoGrif: 1,
    pesoSli: 1,
    pesoRaven: 1,
    pesoHufle: 1,    
    mediaAlunos: function(){
        // varre a lista de notas dos alunos e retorna a media
        return 1;
    },
    mediaCasa: function(nrcasa){
        // multiplica a media dos alunos vezes o peso da casa e retorna  
        return 1;      
    },
    geraNotas: function(nrnotas){
        // gera uma lista de notas com valores aleatorios e poe em notasAlunos
        this.notasAlunos.push(1);
    } 
};
var CasaHogwarts = {
    nomeCasa: "",
    numeroCasa: 0,
    mediaDisciplinas: 1,
    listaDisciplinas: [],
    adicionaDisciplina: function(disciplina){
        // Adiciona Disciplina na lista de disciplinas
    },
    calculaMediaDisciplinas: function(){
        // Varre a lista de disciplinas e tira as medias correspondentes a casa atual
        // e coloca na variavel "mediaDisciplinas"
    }
};
var listaTodasDisciplinas = [];
var grifinoria = Object.create(CasaHogwarts);
var sonserina  = Object.create(CasaHogwarts);
var corvinal   = Object.create(CasaHogwarts);
var lufalufa   = Object.create(CasaHogwarts);

var convertidoJSON = "";
var ObjDeJSON;

$(document).ready( function() {

    $("#IDNovaDisciplina").click(function (evento){
        var nome = $("#IDnomeDis").val();
        var pg   = $("#IDpesoGrif").val();
        var ps   = $("#IDpesoSon").val();
        var pc   = $("#IDpesoCorv").val();
        var pl   = $("#IDpesoLuf").val();
        var disciplina = Object.create(DisciplinaHogwarts);
        disciplina.nomeDisciplina = nome;
        disciplina.pesoGrif = pg;
        disciplina.pesoSli  = ps;
        disciplina.pesoRaven = pc;
        disciplina.pesoHufle = pl;
        disciplina.geraNotas();
        listaTodasDisciplinas.push(disciplina);

        grifinoria.adicionaDisciplina(disciplina);
        sonserina.adicionaDisciplina(disciplina);
        corvinal.adicionaDisciplina(disciplina);
        lufalufa.adicionaDisciplina(disciplina);

     });

    $("#IDcalculaMedias").click(function (evento){

    });

    $("#IDgeraJSONCasas").click(function (evento){
        var JSONcasa1 = JSON.stringify(grifinoria);
        $("#IDtoJSON1").append(JSONcasa1); 

        var JSONcasa2 = JSON.stringify(sonserina);
        $("#IDtoJSON2").append(JSONcasa2); 

        var JSONcasa3 = JSON.stringify(corvinal);
        $("#IDtoJSON3").append(JSONcasa3); 
        
        var JSONcasa4 = JSON.stringify(lufalufa);
        $("#IDtoJSON4").append(JSONcasa4); 
    });

});





