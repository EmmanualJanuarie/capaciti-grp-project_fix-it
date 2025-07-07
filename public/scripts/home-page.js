// Elements
const categoriesSection = document.getElementById('categories_section');
const landingPageSection = document.getElementById('landingPage_section');
const catDropdown = document.getElementById('cat_dropdown');
const closeBtn = document.getElementById('close_btn');
const drpArrow = document.getElementById('drp-arrow');

const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const manageBtn = document.getElementById('manageBtn');

// Toggle category section
catDropdown.addEventListener('click', (e) => {
  e.preventDefault();
  categoriesSection.style.display = 'block';
  landingPageSection.style.display = 'none';
  drpArrow.classList.remove('fa-caret-down');
  drpArrow.classList.add('fa-caret-up');
});

closeBtn.addEventListener('click', () => {
  categoriesSection.style.display = 'none';
  landingPageSection.style.display = 'block';
  drpArrow.classList.remove('fa-caret-up');
  drpArrow.classList.add('fa-caret-down');
});

// User logged in state check
const isLoggedIn = localStorage.getItem('logged-In');
if (isLoggedIn === 'Yes') {
  signupBtn.style.display = 'none';
  loginBtn.style.display = 'none';
  manageBtn.style.display = 'inline-block';
} else {
  signupBtn.style.display = 'inline-block';
  loginBtn.style.display = 'inline-block';
  manageBtn.style.display = 'none';
}

// Sign out functionality
signupBtn.addEventListener('click', () => {
  localStorage.removeItem('logged-In');
  window.location.href = 'index.html'; // Redirect to login or home page after sign out
});
