    <><div class="form-container">
        <h2>Connect with us</h2>
        <div class="form-group">
            <label for="name-input">Name</label>
            <input type="text" id="name-input" required />
        </div>
        <div class="form-group">
            <label for="email-input">Email:</label>
            <input type="email" id="email-input" required />
        </div>
        <div class="form-group">
            <label for="comment-input">Message:</label>
            <textarea id="comment-input" required></textarea>
        </div>
        <div class="form-group">
            <input type="checkbox" id="create-account-checkbox" />
            <label for="create-account-checkbox">Check if you would like to receive notifications on latest updates</label>
        </div>
        <button type="submit" id="submit-btn">Send message</button>
        <div id="confirmation-msg" style="display: none">
            Your message has been sent!
        </div>
    </div><script>
            const form = document.querySelector('.form-container');
            const confirmationMsg = document.getElementById('confirmation-msg');

            form.addEventListener('submit', function(event) {event.preventDefault()}// Prevent the form from submitting
            ; // Prevent the form from submitting

            // Perform any necessary form validation or data processing here

            // Show the confirmation message
            confirmationMsg.style.display = 'block';

            // Reset the form fields
            form.reset();
            &rbrace;);
        </script></>