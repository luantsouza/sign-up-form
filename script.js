const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

const submitButton = document.querySelector(".submit-button");
const inputField = document.querySelector(".input-field");

submitButton.addEventListener('click', (e) =>{
    e.preventDefault()

    const userFirstName = firstName.value;
    const userLastName = lastName.value;
    const userEmail = email.value;
    const userPassword = password.value;

    if(userFirstName === ""){
        firstNameError.textContent = "First Name cannot be empty";
        firstName.style.backgroundImage = "url(images/icon-error.svg)"
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        firstName.placeholder = "";
        setTimeout(()=>{
            firstName.style.backgroundImage = "url()";
            firstNameError.textContent = "";
            firstName.style.borderColor = "hsl(246, 25%, 90%)";
            firstName.placeholder = "First Name";
        },3000);
    }
    if(userLastName === ""){
        lastNameError.textContent = "Last Name cannot be empty";
        lastName.style.backgroundImage = "url(images/icon-error.svg)"
        lastName.style.borderColor = "hsl(0, 100%, 74%)";
        lastName.placeholder = "";
        setTimeout(()=>{
            lastName.style.backgroundImage = "url()";
            lastNameError.textContent = "";
            lastName.style.borderColor = "hsl(246, 25%, 90%)";
            lastName.placeholder = "Last Name";
        },3000);
    }
    
    if(userEmail === ""){
        emailError.textContent = "Looks like this is not an email";
        email.style.backgroundImage = "url(images/icon-error.svg)"
        email.style.borderColor = "hsl(0, 100%, 74%)";
        email.placeholder = "email@example.com";
        setTimeout(()=>{
            email.style.backgroundImage = "url()";
            emailError.textContent = "";
            email.style.borderColor = "hsl(246, 25%, 90%)";
            email.placeholder = "Email Adress";
        },3000);
    }
    if(userPassword === ""){
        passwordError.textContent = "Password cannot be empty";
        password.style.backgroundImage = "url(images/icon-error.svg)";
        password.style.borderColor = "hsl(0, 100%, 74%)";
        password.placeholder = "";
        setTimeout(()=>{
            password.style.backgroundImage = "url()";
            passwordError.textContent = "";
            password.style.borderColor = "hsl(246, 25%, 90%)";
            password.placeholder = "Password";
        },3000);
    }

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    password.value = "";
})