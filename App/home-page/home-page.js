// variable for signup container
let signup_container = document.getElementById("signup_container");

// variable for signuin container
let signin_container = document.getElementById("signin_container");

// boolean variable for form
var form_toggled = false;

document.getElementById('signupBtn').addEventListener('click', () => {
    form_toggled = !form_toggled;
    toggleSignupform();


});

document.getElementById('loginBtn').addEventListener('click', () => {
    form_toggled = !form_toggled;
    toggleSigninform();
});


// Function to toggle Sign up form when called
function toggleSignupform() {
    if (form_toggled) {
        signup_container.style.display = "block";
    } else {
        signup_container.style.display = "none";
    }
}

// Function to toggle Sign in form when called
function toggleSigninform() {
    if (form_toggled) {
        signin_container.style.display = "block";
    } else {
        signin_container.style.display = "none";
    }
}

// --- courosel js code -----
let currentIndex = 0;
    const slides = document.querySelectorAll('.img-container');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }

    setInterval(showNextSlide, 5000); // Change slide every 3 seconds