var Disciplina = {
    nomeDisciplina: "",
    pesoG:1,
    pesoS:1,
    pesoC:1,
    pesoL:1 ,
    listaNotas: [10,5,3],
    geraNotas: function(nrNotas){
        for(var j=0 ; j < nrNotas ; j++){
            var notaALeatorio = Math.floor(Math.random() * (11));
            this.listaNotas.push(notaALeatorio);
        }
    },
    calcularMediasDis: function(){
        var total = 0;
        for(var i=0; i < this.listaNotas.length ; i++){
            total += this.listaNotas[i];
        };
        return (total/this.listaNotas.length);
    }
};
var CasaHogwart = {
    nomeCasa: "",
    nrCasa: 0,
    mediaDisciplinas: 0,
    listaDisciplinas: [],
    addDisciplina: function (d){
        this.listaDisciplinas.push(d);
    },
    calculaMedias: function(){
        for(var l=0; l < this.listaDisciplinas.length ; l++){
            var mediaDis = this.listaDisciplinas[l].calcularMediasDis();
            if (this.nrCasa == 1){
                mediaDis += mediaDis * this.listaDisciplinas[l].pesoG;
            };
            if (this.nrCasa == 2){
                mediaDis += mediaDis * this.listaDisciplinas[l].pesoS;
            };
            if (this.nrCasa == 3){
                mediaDis += mediaDis * this.listaDisciplinas[l].pesoC;
            };
            if (this.nrCasa == 4){
                mediaDis += mediaDis * this.listaDisciplinas[l].pesoL;
            };
        }
        this.mediaDisciplinas = mediaDis / this.listaDisciplinas.length;

    }
};

var grinfinoria = Object.create(CasaHogwart);
var sonserina   = Object.create(CasaHogwart);
var corvinal    = Object.create(CasaHogwart);
var lufalufa    = Object.create(CasaHogwart);

grinfinoria.nomeCasa =  "Grifinoria";
grinfinoria.nrCasa =  1;
// Acrescentar outras casas

function adicionarDisciplina(){
    var disciplina = Object.create(Disciplina);
    disciplina.nomeDisciplina = document.getElementById("nomeDis").value;
    disciplina.pesoG = Number(document.getElementById("pesoG").value); 
    disciplina.pesoS = Number(document.getElementById("pesoS").value); 
    disciplina.pesoC = Number(document.getElementById("pesoC").value); 
    disciplina.pesoL = Number(document.getElementById("pesoL").value);
    console.log(disciplina);
    disciplina.geraNotas(20);
    grinfinoria.addDisciplina(disciplina);
    sonserina.addDisciplina(disciplina);
    corvinal.addDisciplina(disciplina);
    lufalufa.addDisciplina(disciplina);    
};

function calcular(){
    grinfinoria.calculaMedias();
    sonserina.calculaMedias();    
    corvinal.calculaMedias();
    lufalufa.calculaMedias(); 
};


function geraJSON(){
    document.getElementById("outJSON").textContent = JSON.stringify(grinfinoria);
};
