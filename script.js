// variable for arrow button
let angle_down = document.getElementById("angle_down");

// variable for signup container
let signup_container = document.getElementById("signup_container");

// variable for signuin container
let signin_container = document.getElementById("signin_container");


// boolean variable for button
var toggled = false;

// boolean variable for form
var form_toggled = false;

document.getElementById('more_btn').addEventListener('click', () => {
    window.location.replace('/App/home-page/home-page.html');
});

document.getElementById('contactus_btn').addEventListener('click', () => {
    window.location.replace('/App/contact-page/contact-page.html');
});

document.getElementById('angle_down').addEventListener('click', () => {
    toggled = !toggled;
    toggleBtn();
});

document.getElementById('signupBtn').addEventListener('click', () => {
    form_toggled = !form_toggled;
    toggleSignupform();


});

document.getElementById('loginBtn').addEventListener('click', () => {
    form_toggled = !form_toggled;
    toggleSigninform();
});

// Function to toggle button when called
function toggleBtn() {
    if (toggled) {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        // replacing the class with another
        angle_down.classList.remove('fa-circle-arrow-down');
        angle_down.classList.toggle('fa-circle-arrow-up');
    } else {
        srcollToTop();
    }
}

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

// Function to scroll to top of page when called
function srcollToTop(){
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    angle_down.classList.remove('fa-circle-arrow-up');
    angle_down.classList.toggle('fa-circle-arrow-down');
}


