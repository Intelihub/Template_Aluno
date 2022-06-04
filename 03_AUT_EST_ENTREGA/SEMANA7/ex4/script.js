function Calcular() {
  var diurno = document.getElementById("flexRadioDefaultDiurno").checked;
  var noturno = document.getElementById("flexRadioDefaultNoturno").checked;
  var nPessoas = parseInt(document.getElementById("nPessoas").value);

  var preco;

  if (diurno) {
    console.log("calculo diurno");
    if (nPessoas > 50) {
      preco = nPessoas * 200 * 0.6;
      console.log(preco);
    } else {
      preco = nPessoas * 200;
      console.log(preco);
    }
  }
  if (noturno) {
    console.log("calculo noturno");
    if (nPessoas > 50) {
      preco = nPessoas * 100 * 0.8;
      console.log(preco);
    } else {
      preco = nPessoas * 100;
      console.log(preco);
    }
  }

  document.getElementById("resultado").innerHTML =
    "Resultado da compra: " + preco;
}
