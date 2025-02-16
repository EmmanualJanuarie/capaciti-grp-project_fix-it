// variable for signup container
let signup_container = document.getElementById("signup_container");

// variable for signuin container
let signin_container = document.getElementById("signin_container");

// Variable for category section
let categories_section = document.getElementById('categories_section');

// Variable for search section
let search_section = document.getElementById('search_section');

// Variable for services card section
let services_card = document.getElementById('services_card');

// Variable for More_info card section
let more_info_section = document.getElementById('more_info_section');

// Variable for footer_section card section
let footer_section = document.getElementById('footer_section');

// Variable for featured services  section
let featured_services_section = document.getElementById('featured_services_section');


// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    categories_section.style.display = "none";
    search_section.style.display = "block";
    services_card.style.display = "block";
    featured_services_section.style.display = "block";
    more_info_section.style.display = "block";
    footer_section.style.display = "block";
    window.location.href = "../home-page/home-page.html";
    
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    categories_section.style.display = "block";
    search_section.style.display = "none";
    services_card.style.display = "none";
    more_info_section.style.display = "none";
    footer_section.style.display = "none";
    featured_services_section.style.display = "none";
});


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

function toContactUs_page(){
    window.location.href = "../contact-page/contact-page.html";
}