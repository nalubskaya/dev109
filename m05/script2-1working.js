var dataEntry1;
var dataEntry1 = prompt("Please enter number");  
alert("You entered number " + dataEntry1 + " let me check the table");         

function userInput(input) {  
//Check for valid entry and input
  if (isNaN(input) === false && input > 10) { 
//checking for input between 0 to 10
    alert("I can only work with 0 to 10 numbers, please try again.");
    window.location.reload(); 
//page load again after the message
    return false;
  }

  if (isNaN(input) || input < 0 || input == "0" || input > 10) { 
//for all unrecognized entries or 0 input set to 0
    return 0;
  } else { 
 var result = Math.round(input); 
    return result; //Returns results for round numbers entry with dec
  }
}

// first entry from user testing assigned new variable

var table = userInput(dataEntry1)
// Write the message into the page table for the data entry placement

var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Header for the table

// Show multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
el.innerHTML = msg;
    }

  return msg;

}
