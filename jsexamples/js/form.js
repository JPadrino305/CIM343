"use strict";

let button = document.getElementById("submit");
let select = document.getElementById("animals");
let addImages = document.getElementById("addImages");

select.addEventListener("change" , function(){
console.log(select.value);

})

button.addEventListener("click" , function(){
if(select.value == "koala"){
addimages.innerHTML = "<img src=>'https://images.pexels.com/photos/37701031/pexels-photo-37701031.jpeg' alt =' " + select.value + " ' width='200'>";


}

});