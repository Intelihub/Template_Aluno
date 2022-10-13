//Declaração de variáveis
var l = 0;
var li = parseInt(0);
var lin = parseInt(0);
var list = [li];
var li1 = parseInt(1);

//Função que adiciona valores na tabela
function AddEvent() {
    console.log("---AddEvent---")

    //Pega os valores das inputs
    var name = document.getElementById('name').value;
    var test = document.getElementById('test').value;
    var work = document.getElementById('work').value;

    //Confere se foi dado valores às inputs
    if(name==0||test==isNaN||work==isNaN){
        alert("Introduza valores válidos");
        return;
    };

    //Conta a quantidade de linhas da Tabela e adiciona elementos crescentes ao array "list"
    l++;
    list.push(li1++);
    console.log(list);

    //Template a ser introduzido no html como tabela, com valores do id da media crescentes
    var template = `
                <tr>
                    <td>${name}</td>
                    <td>${test}</td>
                    <td>${work}</td>
                    <td id='media${list[lin++]}'></td>
                </tr>`;

    //Colaca o template na tabela
    document.getElementById('tb').innerHTML += template;
}

//Calcula as medias e notas
function CalcAverage(){
    console.log("---CalcAverage---")
    
    //Declaração de variáveis
    var average = parseFloat(0);
    var linput = parseInt(0);
    var table = document.getElementById('tb');
    var GeneralSum = parseFloat(0);
    var TestSum = parseFloat(0);
    var WorkSum = parseFloat(0);
    var TestGrades = [];
    var WorkGrades = [];
    
    //Repetição até varrer toda a tabela(linha por linha)
    for(var i=0; i<=l; i++){
        //Pega os valores da tabela por linha e os transforma em números
        var GetTestElements = table.rows[i].cells[1].childNodes.item(0);
        var GetWorkElements = table.rows[i].cells[2].childNodes.item(0);
        var TestNumber = parseFloat(GetTestElements.data);
        var WorkNumber = parseFloat(GetWorkElements.data);

        //Garante que não apareça "NaN"
        if(!isNaN(TestNumber, WorkNumber)){
            //Cálculo da média de cada aluno, e colocando na id correspondente, graças ao array crescente listado acima
            average = (TestNumber*2 + WorkNumber*3)/5;
            document.getElementById(`media${list[linput++]}`).innerHTML = average;
            
            //Soma de todos os valores pegos na tabela(soma a cada passagem)
            GeneralSum += average;
            TestSum += TestNumber;
            WorkSum += WorkNumber;
            
            //Coloca as notas das provas e dos trabalhos em um array
            TestGrades.push(TestNumber);
            WorkGrades.push(WorkNumber);
        }
    }

    //Calcula a média geral, das provas e dos trabalhos(arredondando para 2 casas decimais)
    var AverageGeneral = (GeneralSum/l).toFixed(2);
    var AverageTest = (TestSum/l).toFixed(2);
    var AverageWork = (WorkSum/l).toFixed(2);
    //Pega as notas mínimas e máximas de cada array
    var Testmin = Math.min(...TestGrades); var Testmax = Math.max(...TestGrades);
    var Workmin = Math.min(...WorkGrades); var Workmax = Math.max(... WorkGrades);

    //Coloca todos os valores solicitados
    document.getElementById("testmm").innerHTML = `<h2>Prova Mínima: ${Testmin} Prova Máxima: ${Testmax}<h2/>`;
    document.getElementById("workmm").innerHTML = `<h2>Trabalho Mínimo: ${Workmin} Trabalho Máximo: ${Workmax}<h2/>`;
    document.getElementById("calcmg").innerHTML = `<h2>Média Geral: ${AverageGeneral}<h2/>`;
    document.getElementById("calcmtw").innerHTML = `<h2>Média das Provas: ${AverageTest} Média dos Trabalhos: ${AverageWork}<h2/>`;
}



