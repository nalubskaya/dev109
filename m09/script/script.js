var  mybutton = document.getElementById("cleanButton");
mybutton.addEventListener("click", function(event) {

// Clean the dots when the button is clicked

var element = document.querySelectorAll(".dot");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events
event.stopPropagation();
  });

//add event to the page on the mouse click

  document.body.addEventListener("click", function(event) {
  
    if (event.target.id !== "cleanButton") {
        const dot = document.createElement("div");
    dot.className = "dot";
//dot position on click 
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
//dot added to the page
    document.body.appendChild(dot);
}
  });
