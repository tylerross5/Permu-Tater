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
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/controller/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);