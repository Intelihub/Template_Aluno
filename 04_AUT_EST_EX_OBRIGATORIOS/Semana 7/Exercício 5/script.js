function AddEvent() {
    var name = document.getElementById('name').value;
    var test = document.getElementById('test').value;
    var work = document.getElementById('work').value;

    var template = `
                <tr>
                    <td>${name}</td>
                    <td>${test}</td>
                    <td>${work}</td>
                </tr>`;

    document.getElementById('tb').innerHTML += template;
}

function Calc(){
    var table = document.getElementById('tb');
    var calcmt = 0;
    var calcmw = 0;
    var i;
            
    for(i=1; i<table.rows.length; i++)
    {
        calcmt = ((calcmt + parseInt(table.rows[i].cells[1].innerHTML))/i);
        calcmw = ((calcmw + parseInt(table.rows[i].cells[2].innerHTML))/i);
    }
    
    document.getElementById("calcmt").innerHTML = "Média das Provas: " + calcmt;
    document.getElementById("calcmw").innerHTML = "Média dos Trabalhos: " + calcmw;
}