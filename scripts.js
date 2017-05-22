$(document).ready(function(){
  var display = "";
  var digit;

  // put a while loop around this
    $("button").click(function(){
      digit = $(this).attr('id');
      console.log(digit);
      // console.log(digit);
      display += digit;
      $("#ans").html(display);
    });
});
