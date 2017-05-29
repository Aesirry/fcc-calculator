$(document).ready(function(){
  var expression = "";
  var keyInput;
  var ans;

  $(".number").click(function(){
    keyInput = $(this).html();
    // checks if a dot has already been inputted
    if(keyInput == "." && expression.indexOf(".") != -1){
      return;
    }
    // if there is no input and . is the first input then also include a zero
    if(keyInput == "." && expression.length == 0){
      expression += "0" + keyInput;
      $("#dispAns").html(expression);
      return;
    }
    // check if zero is inputted again before . is inputted..
    if(keyInput == "0"){
      if(expression.indexOf(".") == -1){
        return;
      }
      else{
        expression += keyInput;
        $("#dispAns").html(expression);
        return;
      }
    }
    expression += keyInput;
    $("#dispAns").html(expression);
  }); // number

  $(".operator").click(function(){
    // // if the last input is an operator then don't include in expression
    if(expression[expression.length - 1] == "%" ||
    expression[expression.length - 1] == "+" ||
    expression[expression.length - 1] == "/" ||
    expression[expression.length - 1] == "*" ||
    expression[expression.length - 1] == "-"){
      return;
    }

    // input with answer undefined
    if (typeof ans === "undefined"){
      keyInput = $(this).html();
      expression += keyInput;
      $("#dispAns").html(expression);
    }

    // input where answered is defined
    else {
      keyInput = ans.toString() + $(this).html();
      expression += keyInput;
      $("#dispAns").html(expression);
    }

  }); // operator

  $("#equals").click(function(){
    ans = expression.split("");
    ans = ans.filter(function(value){
      return value != "=";
    });
    ans = ans.join("");
    ans = eval(ans);

    if(isNaN(ans)){
      ans = "Error";
      $("#expression").html(expression);
      $("#dispAns").html(ans);
      expression = "";
      ans = undefined;
    }

    else{
      $("#expression").html(expression);
      $("#dispAns").html(ans);
      expression = "";
    }
  }); // equals

  $("#clear").click(function(){
    $("#dispAns").html("0");
    $("#expression").html("0");
    expression = "";
    ans = undefined;
  }); //clear

  $("#correct").click(function(){
    // check if there is only 1 char in the input area
    if(expression.length == 0){
      expression = 0;
      $("#dispAns").html(expression);
      return;
    }
    expression = expression.slice(0, -1);
    $("#dispAns").html(expression);
  }); //correct

});
