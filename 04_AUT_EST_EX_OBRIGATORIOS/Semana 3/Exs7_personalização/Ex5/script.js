var aluno = 1;
var inputs = ``;
var i = 1;
var final = ""
var string = `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><br><br></div>`
function adicionar() {
    var qtd = Number($("#valorEntrada").val());
    if (qtd != null && qtd != NaN) {
        let i = 0;
        while (i != qtd) {
            final += `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><div id = "resultprovaaluno${aluno}></div>"<br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><div id = "resulttrabalhoaluno${aluno}></div>"<br><br></div>`;
            aluno += 1;
            i += 1;
        }
        $("#result").html(final);
    }
    else {
        inputs += `<div id = "aluno${aluno}"><input type = "number" id = "notaAluno${aluno}" name = "nota" placeholder="Prova Aluno ${aluno}"><label for = "nota"> - Insira a nota da prova do aluno ${aluno} aqui</label><br><input type = "number" id = "trabalhoAluno${aluno}" placeholder = "Trabalho Aluno ${aluno}"><label for = "nota"> - Insira a nota do trabalho do aluno ${aluno} aqui</label><br><br></div>`;
        aluno += 1;
        $("#result").html(inputs);
    }
    $("#valorEntrada").val("")
}
var k = 1;
var soma = 0
var somatrabalho = 0;
var listaProva = [];
var listaTrabalho = [];
var quant = 1;
function save() {
    while (k < aluno) {
        let provaAluno = Number($(`#notaAluno${k}`).val());
        let trabalhoAluno = Number($(`#trabalhoAluno${k}`).val());
        let media = 0;
        media = (provaAluno*2 + 3*trabalhoAluno)/5
        $("#values").append(`Média do aluno ${k}: ` + media + "<br>")
        let mediaGeral = 0;
        var mediaProva = 0;
        var mediaTrabalho = 0;
        let menorProva;
        let maiorTrabalho;
        k += 1;
        soma += provaAluno;
        somatrabalho += trabalhoAluno;
        quant += 1;
        listaProva.push(provaAluno);
        listaTrabalho.push(trabalhoAluno);
    }
    mediaTrabalho = somatrabalho/quant;
    mediaProva = soma/quant;
    $("#values").append("Existem " + quant + " provas e " + quant + " trabalhos e a média aritmética entre eles é, respectivamente: " + mediaProva + " e " + mediaTrabalho + " " + quant);
    var a = 0;
    var m = 0;
    var maiorProva = listaProva[m]
    var menorProva
    var maiorTrabalho
    var menorTrabalho
    while (a < listaProva.length) {

        if (listaProva[m] < listaProva[m+1]) {
            maiorProva = listaProva[m+1];
        }
        if (listaTrabalho[m] < listaTrabalho[m+1]) {
            maiorTrabalho = listaTrabalho[m+1];
        }
        a += 1
        m += 1

    }
    a = 0;
    m = 0;
    menorTrabalho = listaTrabalho[m]
    menorProva = listaProva[m]
    while (a <   listaProva.length) {

        if (listaProva[m] > listaProva[m+1]) {
            menorProva = listaProva[m+1];
        }
        if (listaTrabalho[m] > listaTrabalho[m+1]) {
            menorTrabalho = listaTrabalho[m+1];
        }
        a += 1
        m += 1

    }
    $("#values").append(`<br>Notas da prova: Maior = ${maiorProva}, Menor = ${menorProva}.<br> Notas do trabalho: Maior = ${maiorTrabalho}, Menor = ${menorTrabalho}.`)
    $("#values").append('<br>Média geral = '+ (soma*2+somatrabalho*3)/5)
}