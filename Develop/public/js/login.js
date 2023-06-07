const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    if (email === "example@example.com" && password === "password") {
        alert("Welcome!");
    } else {
        alert("Incorrect email or password.");
    }

    // Optionally, you can clear the form fields after submission
    loginForm.reset();
});

