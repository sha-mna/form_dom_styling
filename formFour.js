// Get the values of form fields using js

function handleSubmit(e) {

    e.preventDefault();
    
    let form = document.forms[0];

    let firstName = form['firstName'].value;

    let lastName = form['lastName'].value;

    let email = form['email'].value;

    let password = form['password'].value;

    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
}