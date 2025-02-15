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

// --- courosel js code for services images-----
let currentCardIndex = 0;
const cards = document.querySelectorAll('.card-item');
const totalCards = cards.length;

// For diagnostic checks
console.log("There are: " + totalCards + " cards active");

function showNextCard() {
  const currentCard = cards[currentCardIndex];

  currentCardIndex = (currentCardIndex + 1) % totalCards;
    console.log("What card index we at -> " + currentCardIndex);

  // Move the current card to the end of the list after it fades out
  setTimeout(() => {
    currentCard.style.left = `${totalCards * 220}px`;
    currentCard.style.position = 'relative';
    currentCard.style.left = '0';
    document.querySelector('.card-list').appendChild(currentCard);
  }, 1000); // Adjust this timing to match the transition duration
}

// --- courosel js code for main image carousel -----
let currentIndex = 0;
    const slides = document.querySelectorAll('.img-container');
    const totalSlides = slides.length;
    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }
    setInterval(showNextSlide, 5000); // Change slide every 3 seconds

// Initialize first card
cards[0].classList.add('fade-in');

setInterval(showNextCard, 3000); // Change card every 3 seconds



// --- courosel js code for services cards-----
let featured_currentCardIndex = 0;
const feature_cards = document.querySelectorAll('.services-card-item');
const feature_totalCards = feature_cards.length;

function showNext_FeatureServicesCard() {
  const feture_currentCard = feature_cards[currentCardIndex];

  currentCardIndex = (currentCardIndex + 1) % feature_totalCards;

  // Move the current card to the end of the list after it fades out
  setTimeout(() => {
    feture_currentCard.style.left = `${totalCards * 220}px`;
    feture_currentCard.style.position = 'relative';
    feture_currentCard.style.left = '0';
    document.querySelector('.services-card-list').appendChild(feture_currentCard);
  }, 1000); // Adjust this timing to match the transition duration
}

setInterval(showNext_FeatureServicesCard, 3000); // Change slide every 3 seconds





// -- functions for the services cards
function toGardner(){
    window.location.href = "#Gardner";
}

function toTutor(){
    window.location.href = "#Tutor";
}

function toTechnician(){
    window.location.href = "#Technician";
}

function toMechanic(){
    window.location.href = "#Mechanic";
}

function toPlumber(){
    window.location.href = "#Plumber";
}