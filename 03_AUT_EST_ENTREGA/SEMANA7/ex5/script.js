$(function() {
    $("#inserir").click( () => {
        // atribui o value do id="nAlunos" para a variável
        let quantidade = $("#nAlunos").val();

        if (quantidade) {
            quantidade = parseInt(quantidade);
            for (let i=1; i <= quantidade; i++) {

                $("body").append(`<input type="text" id="nome${i}" placeholder="Nome ${i}">`);
                $("body").append(`<input type="number" id="prova${i}" placeholder="Nota da prova">`);
                $("body").append(`<input type="number" id="trabalho${i}" placeholder="Nota do trabalho">`);

                $("body").append(`<br>`);

            }

            $("body").append(`<input type="button" id="calcular" value="Calcular">`);
            $(function() {
                $("#calcular").click( () => {
                    console.log("teste")
                    for (let c=1; c <= quantidade; c++) {
                        // var nomeTemporario = '"'+'#nome'+c+'"';
                        // nomeTemporario = String(nomeTemporario);
                        // let nome = $(nomeTemporario).val(); 
                        // console.log(nome)
                    }
                })
            });
        }
    });
  });