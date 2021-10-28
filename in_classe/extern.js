$("#add").click(function(){
    var input1 = $("#n1");
    var input2 = $("#n2");
    if(input1 != "" && input2 != ""){
        var n1 = parseInt(input1.val());
        console.log();
        var n2 = parseInt(input2.val());
        var result = n1+n2;
        var string = "<tr><td>"+n1+"</td><td>+</td><td>"+n2+"</td><td>"+result+"</td></tr>";
        $("#table").append(string);
    }
    input1.val("");
    input2.val("");
});
$("#substract").click(function(){
    var input1 = $("#n1");
    var input2 = $("#n2");
    if(input1 != "" && input2 != ""){
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var result = n1-n2;
        var string = "<tr><td>"+n1+"</td><td>-</td><td>"+n2+"</td><td>"+result+"</td></tr>";
        $("#table").append(string);
    }
    input1.val("");
    input2.val("");
});
$("#multiply").click(function(){
    var input1 = $("#n1");
    var input2 = $("#n2");
    if(input1 != "" && input2 != ""){
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var result = n1*n2;
        var string = "<tr><td>"+n1+"</td><td>*</td><td>"+n2+"</td><td>"+result+"</td></tr>";
        $("#table").append(string);
    }
    input1.val("");
    input2.val("");
});
$("#divide").click(function(){
    var input1 = $("#n1");
    var input2 = $("#n2");
    if(input1 != "" && input1.val() != 0 && input2 != ""){
        var n1 = parseInt(input1.val());
        var n2 = parseInt(input2.val());
        var result = n1/n2;
        var string = "<tr><td>"+n1+"</td><td>/</td><td>"+n2+"</td><td>"+result+"</td></tr>";
        $("#table").append(string);
    }
    input1.val("");
    input2.val("");
});