function Calcular() {
    var c1 = document.getElementById("c1").value;
    var c2 = document.getElementById("c2").value;
    var kgc1 = document.getElementById("kgc1").value;
    var kgc2 = document.getElementById("kgc2").value;
    const kgfileacima5 = 23.80;
    const kgfileabaixo5 = 24.90;
    const kgalcatraacima5 = 42.80;
    const kgalcatraabaixo5 = 45.90;
    const kgpicanhaacima5 = 53.80;
    const kgpicanhaabaixo5 = 56.90;
    var preco1 = null;
    var preco2 = null;
    pgmt = document.getElementById("pgmt").value;

    
        if (kgc1 > 5) {
            if (c1 == "fileduplo") {
                preco1 = kgc1 * kgfileacima5;
            }
            else if (c1 == "alcatra") {
                preco1 = kgc1 * kgalcatraacima5;
            }
            else if (c1 == "picanha") {
                preco1 = kgc1 * kgpicanhaacima5;
            }
        }
        if(kgc2 <= 5){
            if(c2 == "fileduplo"){
                preco2 = kgc2 * kgfileabaixo5;
            }
            else if(c2 == "alcatra"){
                preco2 = kgc2 * kgalcatraabaixo5;
            }
            else if(c2 == "Picanha"){
                preco2 = kgc2 * kgpicanhaabaixo5;
            }
        }
    


}