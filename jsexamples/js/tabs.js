"use strict";

let allPlaces = document.querySelectorAll(".place"); //is an array, which is a collection of variable values

//console.log(allPlaces.length)

console.log(allPlaces[0].innerText);
console.log(allPlaces[1].innerText);
console.log(allPlaces[2].innerText);


//use forEach when you have a group of objects
allPlaces.forEach(button=>{
    button.style.backgroundColor="green";

});


allPlaces[0].addEventListener("click",function(){
    document.getElementById("tabContent").
    innerText = "Big Ben is lcoated in London!";
});