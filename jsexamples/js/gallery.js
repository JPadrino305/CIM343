let allImages = document.querySelectorAll(".images");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let currentImage = 0

allImages[currentImage].style.display = "block";
function nextImage(){

    allImages[currentImage].style.display = "none";
    currentImage = currentImage + 1;
    if(currentImage == allImages.length){
        currentImage = 0;

    }
    allImages[currentImage].style.display = "block";

}


function prevImage(){

    allImages[currentImage].style.display = "none";
    currentImage = currentImage - 1;
    if(currentImage == -1){
        //currentImage = 0;
        currentImage = allImages.length-1;
    }
    allImages[currentImage].style.display = "block";
}

nextButton.addEventListener("click", nextImage);

prevButton.addEventListener("click", prevImage);

let autoCycle = false;
let cycleInterval;

startButton.addEventListener("click", function(){
    if(autoCycle == false){
cycleInterval = setInterval(nextImage,3000);
autoCycle = true;
}

});

stopButton.addEventListener("click", function(){
clearInterval(cycleInterval);
autoCycle: false;

});



