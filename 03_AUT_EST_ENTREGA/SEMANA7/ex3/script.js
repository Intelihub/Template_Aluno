function Conferir(){
    var tel = document.getElementById('tel').value;
    if (tel[0] == '(' & tel[3] == ')' & tel[9] == '-' & tel[1]){
         alert('Formato aprovado!');
    }
    else {
        alert ('Formato incorreto!')
    }
}
