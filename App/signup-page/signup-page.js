// script.js
document.getElementById('signUp_form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this); // Get form data

    fetch('../../php/signup-submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Check if the response is OK (status code 200)
        if (response.ok) {
            return response.text(); // Get the response text
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        // Show the alert with the response from the server
        alert(data); // Assuming the PHP script echoes a message
        this.reset(); // Reset the form after submission
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was a problem with the submission.'); // Show an alert for errors
    });
});