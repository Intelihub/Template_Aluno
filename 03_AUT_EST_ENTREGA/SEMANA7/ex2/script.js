function Inverter() {
    var t1 = document.getElementById("t1").value;
    var t2 = document.getElementById("t2").value;
    var temp = t1;
    document.getElementById("t1").value = t2;
    document.getElementById("t2").value = temp;
}