function PhoneNumber() {
    //Pega os valores do input e os separa em array
    var phone = document.getElementById("phone").value;
    var phonesplit = phone.split('');
    console.log(phonesplit);

    //Verifica se cada elemento do array é o valor requerido(envia um alert se não)
    if (phonesplit[0] != '(') {
        alert("formatacao do DDD incoreta");
    } else if (phonesplit[3] != ')') {
        alert("formatacao do DDD incoreta")
    } else if (phonesplit[9] != '-') {
        alert("formatacao do numero incoreta")
    } else if (isNaN(phonesplit[1])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[2])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[4])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[5])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[6])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[7])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[8])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[10])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[11])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[12])) {
        alert("nao digitou numero")
    } else if (isNaN(phonesplit[13])) {
        alert("nao digitou numero")
    } else alert("Parabéns"); //Se cada elemento do array for o valor requerido, então é dado o parabéns
}