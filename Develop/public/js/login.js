// This will display a message saying "Welcome!" if the email is "example@example.com"
// and the password is "password", and display a message saying "Incorrect email or password." otherwise.

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
  // Refresh the page after 1 seconds
  setTimeout(function () {
    location.reload();
  }, 1000);
});
