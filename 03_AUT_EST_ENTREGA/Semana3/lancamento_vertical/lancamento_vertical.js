function functionCalcular() {
    const gravity = 10;
    var inicialVelocity = document.getElementById('v0').value;
    // formula: t = v0 / gravity
    var t = v0 / gravity;
    console.log("Resultado: " + v0);
    // formula v0^2 / 2gravity 
    var hmax = (v0 * v0) / (2 * gravity)
    document.getElementById('outputResult').innerHTML = "Seu resultado é: " + t + "segundos e " + hmax + "metros de altura máxima";
}
