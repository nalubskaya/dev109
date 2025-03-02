function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid

//2) create variables to read the values from html text inputs

//3) do the validation

//4) send error messages 

//5) return the status of each field

//1) ////////////Create variable FirstName//////////////////////////////////
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("firstname").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname);

//1) //////////////////Create variable LastName//////////////////////////////////////
var validLastname=false;
//2) read value from HTML
var validLastname = document.getElementById("lastname").value;

//3) Do validation
//4) Send error message to HMTL
//5) return status of each field
return (validFirstname && validLastname);

/////////////Email//////////////////////////////////
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
else
    return true; //Or assign the value to a variable. For example validEmail = true

///////////////////////Phone validation////////////////
var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...
}