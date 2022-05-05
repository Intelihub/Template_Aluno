function functionCalcular() {
    const gravity = 10;
    var inicialVelocity = document.getElementById('v0').value;
    // formula: t = v0 / gravity
    var v0 = inicialVelocity / gravity;
    console.log("Resultado: " + v0);
    document.getElementById('outputResult').innerHTML = "Seu resultado é: " + v0;
}
