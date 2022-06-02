function NavbarIndex() {
    $('.nav-bar-function').append(' \
        <ul class="nav-bar"> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="HTML/informacoes_pessoais.html">Informações \
                    pessoais</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="HTML/informacoes_contato.html">Informações de \
                    contato</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="HTML/formacao_academica.html">Formação acadêmica</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="HTML/competencias.html">Competências</a> \
            </li> \
        </ul>'
    );
    console.log('teste');
};
function Navbar() {
    $('.nav-bar-function').append(' \
        <ul class="nav-bar"> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="informacoes_pessoais.html">Informações \
                    pessoais</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="informacoes_contato.html">Informações de \
                    contato</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="formacao_academica.html">Formação acadêmica</a> \
            </li> \
            <li class="nav-bar-item"> \
                <a class="nav-bar-link" href="competencias.html">Competências</a> \
            </li> \
        </ul>'
    );
    console.log('teste');
};

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

