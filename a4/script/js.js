function validateForm() {
    // Reset error messages
    var errorMessages = "";
    document.getElementById("errorMessages").innerHTML = "";
    
    // 1) Create variables to track validation status
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    
    // 2) Read values from HTML
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var userEmail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Reset styling
    document.getElementById("firstname").classList.remove("error-input");
    document.getElementById("lastname").classList.remove("error-input");
    document.getElementById("email").classList.remove("error-input");
    document.getElementById("phone").classList.remove("error-input");
    
    // Hide email error message
    var errorElement = document.getElementById("emailError");
    if (errorElement) {
        errorElement.style.display = "none";
    }
    
    // 3) Validate first name
    if (firstname === null || firstname === "" || firstname.length > 20) {
        errorMessages += "<p style='color: red; font-weight: bold;'>The firstname is required and can't be greater than 20 characters</p>";
        document.getElementById("firstname").classList.add("error-input");
    } else {
        validFirstname = true;
    }
    
    // Validate last name
    if (lastname === null || lastname === "" || lastname.length > 20) {
        errorMessages += "<p style='color: red; font-weight: bold;'>The lastname is required and can't be greater than 20 characters</p>";
        document.getElementById("lastname").classList.add("error-input");
    } else {
        validLastname = true;
    }
    
    // Validate phone number using pattern matching
    var numbers = /^[0-9]+$/;
    if (phone === null || phone === "" || phone.length > 15 || !phone.match(numbers)) {
        errorMessages += "<p style='color: red; font-weight: bold;'>Please enter a valid phone number (numbers only, maximum 15 digits)</p>";
        document.getElementById("phone").classList.add("error-input");
        document.getElementById("phone").focus();
    } else {
        validPhone = true;
    }
    
    // Display name and phone validation errors
    document.getElementById("errorMessages").innerHTML = errorMessages;
    
    // Validate email
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
        // Display email error message
        if (errorElement) {
            errorElement.style.display = "block";
            errorElement.innerHTML = "<p style='color: red; font-weight: bold;'>Please enter a valid email address</p>";
        } else {
            // If emailError element doesn't exist, add to general error messages
            errorMessages += "<p style='color: red; font-weight: bold;'>Please enter a valid email address</p>";
            document.getElementById("errorMessages").innerHTML = errorMessages;
        }
        
        document.getElementById("email").classList.add("error-input");
        document.getElementById("email").focus();
    } else {
        validEmail = true;
    }
    
    // Return overall validation status
    return (validFirstname && validLastname && validEmail && validPhone);
}
