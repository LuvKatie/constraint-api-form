const form = document.querySelector("form");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");

function fieldValidate(message, input, inputName) {
    if (input.validity.valid) {
        message.textContent = "";
        message.className = "error";
    } else {
        showError(message, input, inputName);
    }
}

email.addEventListener("input", (event) => {
    const errorMsg = document.querySelector("#mail + span.error");
    fieldValidate(errorMsg, email, "email");
});

country.addEventListener("input", (event) => {
    const errorMsg = document.querySelector("#country + span.error");
    fieldValidate(errorMsg, country, "country");
});

zipcode.addEventListener("input", (event) => {
    const errorMsg = document.querySelector("#zipcode + span.error");
    fieldValidate(errorMsg, zipcode, "zipcode");
});

password.addEventListener("input", (event) => {
    const errorMsg = document.querySelector("#password + span.error");
    fieldValidate(errorMsg, password, "password");
});


form.addEventListener("submit", (event) => {
    console.log("Yo");
    event.preventDefault();
});

function showError(message, input, inputName) {
    if (input.validity.valueMissing) {
        message.textContent = `You need to enter a ${inputName}`;
    } else if (input.validity.typeMismatch) {
        message.textContent = `Entered value needs to be an ${inputName}`;
    } else if (input.validity.patternMismatch) {
        message.textContent = `You need to enter a valid ${inputName}`
    } else if (input.validity.tooShort) {
        message.textContent = `Entered value needs to be at least ${input.minLength} characters; 
        you entered ${input.value.length} characters`;
    }

    message.className = "error active";
}