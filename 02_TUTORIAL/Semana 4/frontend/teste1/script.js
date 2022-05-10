

var ModuloSkynet = { 
    avaliacaoQI: Number(0), // Avaliacao de inteligencia calculada
    perguntaTeste: "A ser inserida",
    respostas: ["A - qq coisa", "B - qq coisa"],
    correta: 0,
    respondida: 0,
    atualizaQI: function(){
        this.avaliacaoQI += Number(20);
    }
};
var convertidoJSON = "";
var ObjDeJSON;
var listaPerguntas = [];

$(document).ready( function() {
    console.log("aguardando");

    $("#IDgeraJSON").click(function (evento){
            console.log("Iniciando conversao:");
            evento.preventDefault();
            convertidoJSON = JSON.stringify(ModuloSkynet);
            $("#IDtoJSON").append(convertidoJSON); 
         });
    $("#IDexecutaOBJ").click(function (evento){
            console.log("Altera o QI :");
            evento.preventDefault();
            ModuloSkynet.atualizaQI();
            convertidoJSON = JSON.stringify(ModuloSkynet);
            $("#IDtoJSON2").append(convertidoJSON); 
    });

    $("#IDmexeJSON").click(function (evento){
            console.log("Sera que o JSON agora faz algo ? :");
            evento.preventDefault();
            convertidoJSON = JSON.stringify(ModuloSkynet);
            try{
                convertidoJSON.avaliacaoQI = 100;
                convertidoJSON = JSON.stringify(ModuloSkynet);
                $("#IDtoJSON3").append(convertidoJSON); 
            }catch(ex){
                $("#IDtoJSON3").append("ERRO: Sinto muito... não vai rolar não </br>");
                $("#IDtoJSON3").append("ERRO:" + ex);
            }
           

    });


    $("#IDmexeJSON2").click(function (evento){
        console.log("Sera que o JSON agora faz algo ? :");
        evento.preventDefault();
        convertidoJSON = JSON.stringify(ModuloSkynet);
        try{
            convertidoJSON = JSON.stringify(ModuloSkynet);
            convertidoJSON.atualizaQI()
            $("#IDtoJSON31").append(convertidoJSON); 
        }catch(ex){
            $("#IDtoJSON31").append("ERRO: Sinto muito... não vai rolar não </br>");
            $("#IDtoJSON31").append("ERRO:" + ex);
        }
       

});

    $("#IDleJSON").click(function (evento){
        evento.preventDefault();
        ModuloSkynet.atualizaQI();
        ObjDeJSON = JSON.parse($("#IDJSONtoConvert").val());
        $("#IDtoJSON4").append(JSON.stringify(ObjDeJSON)); 
    });
});


