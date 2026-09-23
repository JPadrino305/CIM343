"use strict";
let redClickBox = document.getElementById("redClick");

redClickBox.classList.add("clickBox");

redClickBox.addEventListener("click",function(){
    //your actions go in here
});

redClickBox.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = "blue";
});

redClickBox.addEventListener("mouseover", function() {
    redClickBox.style.backgroundColor = "rgba(0, 128, 0, 1.0)";
});

redClickBox.addEventListener("mouseout", function() {
    redClickBox.style.backgroundColor = "red";
});

