document.getElementById('signUp_form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get the values from the form
    const fullName = document.getElementById('flname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pwd').value.trim();
    const phone = document.getElementById('tel').value.trim();
    const isBusinessAccount = document.getElementById('check_business').checked;

    // Validation flags
    let isValid = true;
    let errorMessage = '';

    // Validate Full Name
    if (fullName.length < 3) {
        isValid = false;
        errorMessage += 'Full Name must be at least 3 characters long.\n';
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate Password
    if (password.length < 6) {
        isValid = false;
        errorMessage += 'Password must be at least 6 characters long.\n';
    }

    // Validate Phone Number
    const phonePattern = /^[0-9]{10}$/; // Adjust the pattern as needed
    if (!phonePattern.test(phone)) {
        isValid = false;
        errorMessage += 'Please enter a valid phone number (10 digits).\n';
    }

    // If valid, store values in local storage and submit the form
    if (isValid) {
        // Store values in local storage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password); // Note: Storing passwords in local storage is not secure
        localStorage.setItem('phone', phone);
        localStorage.setItem('isBusinessAccount', isBusinessAccount);

        // Optionally, you can redirect to another page or submit the form
        alert('Sign up successful!');
        window.location.href="../login-page/login-page.html";
        // Uncomment the line below to submit the form to the server
        // this.submit();
    } else {
        alert(errorMessage);
    }
});

