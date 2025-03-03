function validateForm() {
    // Reset error messages
    var errorMessages = "";
    document.getElementById("errorMessages").innerHTML = "";
    
    // 1) Create variables to track validation status
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
	var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
	var validState = false;
    
    // 2) Read values from HTML
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var userEmail = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
	
	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
    
    // Reset styling
    document.getElementById("firstname").classList.remove("error-input");
    document.getElementById("lastname").classList.remove("error-input");
    document.getElementById("email").classList.remove("error-input");
    document.getElementById("phone").classList.remove("error-input");	
	document.getElementById("username").classList.remove("error-input");
    document.getElementById("password").classList.remove("error-input");
    document.getElementById("address").classList.remove("error-input");
    document.getElementById("city").classList.remove("error-input");
	document.getElementById("state").classList.remove("error-input");
    
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
        errorMessages += "<p style='color: red; font-weight: bold;'>Please enter a phone number (numbers only, max 15 digits)</p>";
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
	    // 3) Validate user name
    if (username === null || username === "" || username.length > 12) {
        errorMessages += "<p style='color: red; font-weight: bold;'>The Username is required and can't be greater than 12 characters</p>";
        document.getElementById("username").classList.add("error-input");
    } else {
        validUsername = true;
    }
    
    // Validate username password
    if (password === null || password === "" || password.length > 7) {
        errorMessages += "<p style='color: red; font-weight: bold;'>The Password is required and can't be greater than 7 characters</p>";
        document.getElementById("password").classList.add("error-input");
    } else {
        validPassword = true;
    }
	
	// 3) Validate Address
    if (address === null || address === "" ) {
        errorMessages += "<p style='color: red; font-weight: bold;'>Please add your Address</p>";
        document.getElementById("address").classList.add("error-input");
    } else {
        validAddress = true;
    }
    
    // Validate City
    if (city === null || city === "") {
        errorMessages += "<p style='color: red; font-weight: bold;'>The City is required</p>";
        document.getElementById("city").classList.add("error-input");
    } else {
        validCity = true;
    }
	// Validate State
    if (state === null || state === "" || state.length > 2) {
        errorMessages += "<p style='color: red; font-weight: bold;'>Please Enter state 2 letters</p>";
        document.getElementById("state").classList.add("error-input");
    } else {
        validState = true;
    }
   
        // Display name and phone validation errors
    document.getElementById("errorMessages").innerHTML = errorMessages;
	
    // Return overall validation status
    return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validState);
}
