// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "none";
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "block";
});



// Pagination Js
// renders amount of cards
const cards = Array.from({ length: 50}, (_, i)=> `Card ${i + 1}`);

// constant variable for toatl amount of cards per page
const cardsPerPage = 10;

// determines the current page by default value
let currentPage = 1;

const cardContainer = document.getElementById('card-container');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const pageNumbers = document.getElementById('page-numbers');

// Function to render cards
function renderCards(){
    cardContainer.innerHTML = ''; //clear current cards content
    const start = (currentPage - 1) * cardsPerPage; // calculates starting index of cards to be displayed on viewd page.
    const end = start + cardsPerPage;//Determines the ending index
    const visibleCards = cards.slice(start, end);//Obtains subset of the cards(determines the amount of cards shown at view)

    visibleCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardContainer.appendChild(cardElement);
    });

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= cards.length;

    updatePageNumbers();
}

function updatePageNumbers(){
    pageNumbers.innerHTML = '';
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    for (let i = 1; i <= totalPages; i++){
        const pageNumberButton = document.createElement('button');
        pageNumberButton.innerText = i;
        pageNumberButton.className = i === currentPage ? 'active' : '';
        pageNumberButton.addEventListener('click', () => {
            currentPage = i;
            renderCards();
        });
        pageNumberButton.appendChild(pageNumberButton);
    }
}

prevBtn.addEventListener('click', () => {
    currentPage--;
    renderCards();
});

nextBtn.addEventListener('click', () =>{
    currentPage++;
    renderCards();
});

renderCards();
