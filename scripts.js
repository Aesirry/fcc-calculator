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
    expression += keyInput;
    $("#dispAns").html(expression);
  }); // number

  $(".operator").click(function(){
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
    expression = expression.slice(0, -1);
    $("#dispAns").html(expression);
  }); //correct

});
