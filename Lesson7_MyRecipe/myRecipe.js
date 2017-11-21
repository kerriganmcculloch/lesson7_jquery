/*
Program Name: Recipe Display Application 
Author: Kerrigan McCulloch
Date: November 19, 2017
Filename: myRecipe.js 
*/

/* global $ */
/* global "slow" */ 

//displays the next element after the current target 
function display(event) {
    
    $(event.currentTarget).next().fadeIn("slow"); 
    
    $("div").append("< center>Enjoy!</center>");
    
}//end of display

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);