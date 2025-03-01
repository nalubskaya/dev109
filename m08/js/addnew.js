// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() 
{
  // Create input place to add new item to the list
  var newInput = document.createElement('input');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('id', 'itemText');
  newInput.setAttribute('placeholder', 'Add new item here');
  
  // button to add new items
  var addMoreButton = document.createElement('button');
  addMoreButton.setAttribute('id', 'addButton');
  addMoreButton.textContent = 'Add More Items';
  
  // Create a container div for the input and button
  var inputItem = document.createElement('div');
  inputItem.setAttribute('id', 'inputItem');
  inputItem.appendChild(newInput);
  inputItem.appendChild(addMoreButton);
  
  // Add the place after the list for data entry
  var page = document.getElementById('page');
  page.appendChild(inputItem);
  
  // Click button action
  document.getElementById('addButton').addEventListener('click', addNewItem);
  
  // item added by pressing "Enter/Return" key from keyboard 
  document.getElementById('itemText').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addNewItem();
    }
  });
});

// Function to add a new item to the list
function addNewItem() {
  // Get the value from the input field
  var itemText = document.getElementById('itemText').value;
  
  // Only add the item if the input is not empty
  if (itemText.trim() !== '') {
    // Create a new element and store it in a variable
    var newEl = document.createElement('li');
    
    // Create a text node and store it in a variable
    var newText = document.createTextNode(itemText);
    
    // Attach the new text node to the new element
    newEl.appendChild(newText);
    
    // Find the position where the new element should be added
    var position = document.getElementsByTagName('ul')[0];
    
    // Insert the new element into its position
    position.appendChild(newEl);
    
    // Clear the input field after adding
    document.getElementById('itemText').value = '';
  }
}ition.appendChild(newEl);
