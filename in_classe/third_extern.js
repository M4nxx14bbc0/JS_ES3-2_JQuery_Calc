$("#add").click(() => {calculate("+");});
$("#substract").click(() => {calculate("-");});
$("#multiply").click(() => {calculate("*");});
$("#divide").click(() => {calculate("/");});
var tableArray = JSON.parse(localStorage.getItem("tabella"));
if(localStorage.length != 0){
    if(tableArray.arr.length != 0) {
        tableArray.arr.forEach(element => {
            $("#table").append(element);
        });
    }
}

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
                result.toFixed(5);
                break;
        }
        string = "<tr><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>"+result+"</td><td><button class='elimina'>ELIMINA</td></tr>";
        var table = new Array();
        if(localStorage.length != 0){
            var tableArray = JSON.parse(localStorage.getItem("tabella"));
            var table = tableArray.arr;
        }
        table.push(string);
        var jsonArr = {"arr":table};
        localStorage.setItem("tabella", JSON.stringify(jsonArr));
        $("#table").append(string);
    }
}
