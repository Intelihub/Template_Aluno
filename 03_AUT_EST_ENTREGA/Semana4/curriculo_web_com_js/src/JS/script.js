var active = false

function aparecer() {
    if (active == false) {
        document.getElementById("easter_egg").innerHTML = "Sou estudante do Inteli!";
        document.getElementById("button_saiba_mais").value = "Esconder";
        active = true;
    }
    else {
        document.getElementById("button_saiba_mais").value = "Mostrar de novo";
        document.getElementById("easter_egg").innerHTML = "";
        active = false;
    }
}