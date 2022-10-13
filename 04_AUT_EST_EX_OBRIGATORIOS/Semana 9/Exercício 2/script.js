function Calc() {
    //Pega os valores do input e os separa em array
    var value = document.getElementById("value").value;
    var valuesplit = value.split('');
    console.log(valuesplit);

    //Transforma valor de entrada em número e o valor inicial da soma como 0 
    var valuenumber = Number(value);
    var numbersum = parseInt(0);

    //O valor colocado no Input deve ser positivo e inteiro para realizar a soma, se não, alertará o usuário
    if(Number.isInteger(valuenumber) && value >= 0){
        //Os valores do array serão somados um por um, até completar a lista
        for(var i=0; i<=valuesplit.length; i++){
            var number = parseInt(valuesplit[i]);
            if(!isNaN(number)) numbersum += number;
        };
        //Coloca a soma dos algarismos na página
        document.getElementById("sum").innerHTML = `<h2>A soma dos algarismos é igual a ${numbersum}</h2>`;
    } else alert("Somente valor inteiro positivo");
};