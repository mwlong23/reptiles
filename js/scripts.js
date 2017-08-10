$(document).ready(function(){
  var animal = prompt("Would you like to learn about salamanders, snakes or turtles? Type the animal you would like to learn about below.");
  content = String(animal);

  if(content === "salamanders"){
    $(".salamander").show();
  } else if( content === "turtles"){
    $(".turtles").show();
  } else if(content === "snakes"){
    $(".snakes").show();
  } else {
    prompt("You didn't enter: snakes, salamanders or turtles, try again!");
  }

});
