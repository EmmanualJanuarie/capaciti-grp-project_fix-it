document.getElementById('login_form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the values from the input fields
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pwd').value.trim();

    // Validation flags
    let isValid = true;
    let errorMessage = '';

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Password
    if (password.length === 0) {
        isValid = false;
        errorMessage += 'Password cannot be empty.\n';
    }

    // If valid, check against local storage
    if (isValid) {
        // Retrieve stored values from local storage
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');
        localStorage.setItem("logged-In", "Yes");

        // Check if the entered values match the stored values
        if (email === storedEmail && password === storedPassword) {
            alert('Login successful!');
            // Redirect to another page or perform any other action
            window.location.href = '../../index.html'; // Uncomment to redirect
        } else {
            alert('Invalid email or password. Please try again.');
        }
    } else {
        alert(errorMessage);
    }
});