// script.js
var images = [
    { src: "images/pot19.jpg", alt: "Ceramic pot in green", description: "Handmade item from pottery shop, Ceramic medium size pot in green" },
    { src: "images/pot20.jpg", alt: "A ceramic pot with red curcles", description: "A ceramic pot with red curcles" },
    { src: "images/pot21.jpg", alt: "Ceramic pot with red flower", description: "Ceramic pot with red flower" },
    { src: "images/pot27.jpg", alt: "Ceramic pot in green with round top lid", description: "A ceramic pot in green with round top lid" },
    { src: "images/pot28.jpg", alt: "Ceramic pot in green brown with lid", description: "Ceramic pot in green brown with lid" },
];


let currentImage = 0;
let timerInterval;
//checkslideshow state
let isSlideshowRunning = true; 

var imageElement = document.getElementById("slider-image");
var descriptionElement = document.getElementById("image-description");
var timerElement = document.getElementById("timer");
var stopButton = document.getElementById("stop");


function showImage(index) {
    imageElement.src = images[index].src;
    imageElement.alt = images[index].alt;
    descriptionElement.textContent = images[index].description;
}


function startTimer() {
 if (isSlideshowRunning) {
	// Start at 4 seconds
    let timeLeft = 4; 
    timerElement.textContent = timeLeft;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            nextImage();
            startTimer(); // Restart the timer
        }
    }, 1000);// times 1 timer
  }
}
function nextImage() {
	if (isSlideshowRunning) {
		currentImage = (currentImage + 1) % images.length;
		showImage(currentImage);
		resetTimer();
	}
}
function previousImage() {
	 if (isSlideshowRunning) {
		currentImage = (currentImage - 1 + images.length) % images.length;
		showImage(currentImage);
		resetTimer();
	 }
}
function stopImage() {
    isSlideshowRunning = !isSlideshowRunning;
    
    if (isSlideshowRunning) {
        stopButton.textContent = "Stop";
        startTimer();
    } else {
        stopButton.textContent = "Start";
        clearInterval(timerInterval);
    }
}
function resetTimer() {
    clearInterval(timerInterval);
    startTimer();
}
// Event listeners
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("previous").addEventListener("click", previousImage);
document.getElementById("stop").addEventListener("click", stopImage);

// Initial setup
showImage(currentImage);
startTimer();
