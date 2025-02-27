// Variable for category section

// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "none";
    document.getElementById('fixit_inquiry_section').style.display = "block";
    document.getElementById('services_categories_cards').style.display = "block";
    document.getElementById('join_us_section').style.display = "block";
    document.getElementById('footer_section').style.display = "block";
    document.getElementById('Services_info_section').style.display = "block";
    document.getElementById('featured_services_section').style.display = "block";
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "block";
    document.getElementById('fixit_inquiry_section').style.display = "none";
    document.getElementById('services_categories_cards').style.display = "none";
    document.getElementById('join_us_section').style.display = "none";
    document.getElementById('footer_section').style.display = "none";
    document.getElementById('Services_info_section').style.display = "none";
    document.getElementById('featured_services_section').style.display = "none";
});




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


document.getElementById('john_doe').addEventListener('click', () =>{
  alert('We found data for "John Doe"')
});

document.getElementById('karen').addEventListener('click', () =>{
  alert('We found data for "Karen Foster"')
});

document.getElementById('lisa').addEventListener('click', () =>{
  alert('We found data for "Lisa Langehoven"')
});

document.getElementById('john_smith').addEventListener('click', () =>{
  alert('We found data for "John Smith"')
});

document.getElementById('daniel').addEventListener('click', () =>{
  alert('We found data for "Daniel Baker"')
});

document.getElementById('grace').addEventListener('click', () =>{
  alert('We found data for "Grace Nelson"')
});

document.getElementById('brown').addEventListener('click', () =>{
  alert('We found data for "Sophie Brown"')
});