// can perform math between two numbers
// can clear the input field with a clear button
// can keep chaining mathematical operations together until I hit the equal button

// HOW THE GOOGLE CALCULATOR WORKS
// there is 0 in input when page first loaded.
// there is an Ans variable where the cumulative result of previous operations is.
// Ans is the cumulative result of operations so far.
// Ans has a button of its own to show the cumulative result so far.
// if you enter a second input that is a number it automatically multiplies
// all input is in a string and expressioned in the input section until = pressed
// AC automatically becomes CE once input is entered
// once = is pressed the result goes in the input area. the operation goes in the cumulative area

$(document).ready(function(){
  var expression = "";
  var keyInput;
  var ans;

// check whether number key has been pressed before. if so the just pressing =
  $(".number").click(function(){
    keyInput = $(this).html();
    expression += keyInput;
    $("#dispAns").html(expression);
  });

  $(".operator").click(function(){
    keyInput = $(this).html();
    expression += keyInput;
    $("#dispAns").html(expression);
  });

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
      ans = 0;
    }

    else{
      console.log(ans);
      $("#expression").html(expression);
      $("#dispAns").html(ans);
      expression = "";
    }
  });

  $("#clear").click(function(){
    $("#dispAns").html("0");
    $("#expression").html("0");
    expression = "";
    ans = 0;
  });

  $("#correct").click(function(){
    expression = expression.slice(0, -1);
    $("#dispAns").html(expression);
  });

  $("#ans").click(function(){
    if(typeof ans === "undefined"){
      ans = 0;
      expression = "Ans = ";
      $("#dispAns").html(ans);
      $("#expression").html(expression);
    }
  });

});
