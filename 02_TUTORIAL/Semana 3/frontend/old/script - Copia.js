
var calcResDiv = "calc";
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var x0 = 10;
        var y0 = 20;
        // Alternativa equivalente: var x0 = 10, y0 = 20;
        CalcAddAndShow(x0, y0);
  }
}
function CalcAddAndShow(x, y){
    var op = "+";
    var result = Calc(x, y, op);
    ShowOp(x, y, op);
    ShowResult(result);
}
function Calc(x, y, op){
    var result;
    if (op == "+") {
        result = x + y;
    };
    return result;
}
function ShowOp(x, y, op){
    document.getElementById(calcResDiv).innerHTML += `<br /> ${x} ${op} ${y} = `;
}
function ShowResult(res){
    document.getElementById(calcResDiv).innerHTML += res;
}
