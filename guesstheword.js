"use strict"

let textInput = document.getElementById("myText");
let inputButton = document.getElementById("myButton");
let output = document.getElementById("output");

let letters = ['i', 'b', 'i', 's'];

let incorrect = document.getElementById

inputButton.addEventListener("click", function(){
 let found = false;
for(let i = 0; i < letters.length; i++){
    if(textInput.value == letters[i]){
     output[i].innerHTML = textInput.value;
     found = true;
    }else{
        //letter is incorrect try again


    }

   
}

 if(found == false){
    incorrect.innerHTML = "Incorrect Guess, Try Again!";
    setTimeout(function(){
        incorrect.innerHTML = "";
    },3000);
        
    }

});