$("#add").click(function(){calculate("+");});
$("#substract").click(function(){calculate("+");});
$("#multiply").click(function(){calculate("+");});
$("#divide").click(function(){calculate("+");});

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
            case "-":
                result = n1 * n2;
                break;
            default:
                result = n1 / n2;
                break;
        }
        string = "<tr><td>"+n1+"</td><td>"+segno+"</td><td>"+n2+"</td><td>"+result+"</td></tr>";
        $("#table").append(string);
    }
    input1.val("");
    input2.val("");
}