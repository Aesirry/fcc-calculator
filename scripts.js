// can perform math between two numbers
// can clear the input field with a clear button
// can keep chaining mathematical operations together until I hit the equal button

// HOW THE GOOGLE CALCULATOR WORKS
// there is 0 in input when page first loaded.
// there is an Ans variable where the cumulative result of previous operations is.
// Ans is the cumulative result of operations so far.
// Ans has a button of its own to show the cumulative result so far.
// if you enter a second input that is a number it automatically multiplies
// all input is in a string and displayed in the input section until = pressed
// AC automatically becomes CE once input is entered
// once = is pressed the result goes in the input area. the operation goes in the cumulative area

$(document).ready(function(){
  var display = "";
  var keyInput;
  var ans;

// number keys
  $(".number").click(function(){
    keyInput = $(this).attr('id');
    console.log(keyInput);
    // console.log(digit);
    display += keyInput;
    $("#dispAns").html(display);
  });

  $(".operator").click(function(){
    keyInput = $(this).html();
    console.log(keyInput);
    // console.log(digit);
    display += keyInput;
    $("#dispAns").html(display);
  });

  $("#equals").click(function(){
    ans = eval(display);
    console.log(ans);
    $("#expression").html(ans);
  });

  // clear button
  $("#clear").click(function(){
    $("#dispAns").html("0");
    $("#expression").html("0");
  });

  // if equals button cliked then clear the field.

});
