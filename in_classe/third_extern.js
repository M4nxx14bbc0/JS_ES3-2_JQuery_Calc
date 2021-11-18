$("#add").click(() => {calculate("+");});
$("#substract").click(() => {calculate("-");});
$("#multiply").click(() => {calculate("*");});
$("#divide").click(() => {calculate("/");});
var l = window.localStorage;
$("#table").append(l.getItem("tabella"));
var n = "0";

var calculate = function(segno){
    var input1 = $("#n1");
    var input2 = $("#n2");
    if(input1 != "" && input2 != ""){
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var result, string;
        switch(segno){
            case "+":
                result = n1 + n2;
                break;
            case "-":
                result = n1 - n2;
                break;
            case "*":
                result = n1 * n2;
                break;
            default:
                result = n1 / n2;
                break;
        }
        string = "<tr><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>"+result+"</td><td><button id=''>ELIMINA</td></tr>";
        var table = l.getItem("tabella");
        l.clear();
        l.setItem("tabella", table+string);
        $("#table").append(string);
        console.log("localStorage", l.length);
    }
    input1.val("");
    input2.val("");
}

var localStart = function(){
    var i = "0";
    while(l.getItem(i+('-1')) != null){
        $("#table").append(l.getItem(i));
        i++;
    }
}
localStart();