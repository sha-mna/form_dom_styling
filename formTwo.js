// Validate a number form field using a function, Do an example for CSS Pseudo Selectors

function validateContactForm() {

    let fullName = document.forms["contactForm"]["fullName"].value;

    if(isNaN(fullName)) { 

        return true

    } else {
        
        return false;
    }
}

