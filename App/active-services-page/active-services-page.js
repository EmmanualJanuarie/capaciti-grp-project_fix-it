// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "none";
    document.getElementById('aside_section').style.display = "block";
    document.getElementById('pagination_section').style.display = "block";
    document.getElementById('footer_section').style.display = "block";
    window.location.href = "../active-services-page/active-services-page.html";
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "block";
    document.getElementById('aside_section').style.display = "none";
    document.getElementById('pagination_section').style.display = "none";
    document.getElementById('footer_section').style.display = "none";
});



// Pagination Js
// renders amount of cards
const cards = Array.from({ length: 63}, (_, i)=> `Card ${i + 1}`);

// constant variable for toatl amount of cards per page
const cardsPerPage = 21;

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
    const pagination_col = document.getElementById('pagination_column');
    visibleCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'pag-card';
        cardContainer.appendChild(cardElement);

        // js script fo column
        const columns = document.createElement('div');
        columns.className = 'pag-columns';

        // js script for the two columns
        // column 1
        const img_column = document.createElement('div');
        img_column.className = 'img-column';
        // adding column to columns container
        columns.appendChild(img_column);

        // Adding image tage to image column
        const imgTag = document.createElement('img');
        imgTag.className = 'image-item';
        img_column.appendChild(imgTag);//adding image tag to image column

        // Adding image to href attribute
        imgTag.src = "../../src/img/Automative_Services.jpg";


        // column 2
        const text_column = document.createElement('div');
        text_column.className = 'text-column';
        // adding column to columns container
        columns.appendChild(text_column);


        // creating header 1 tag
        const header_tag = document.createElement('h1');
        header_tag.className = 'header-text';
        header_tag.textContent = "[Tasker's Name]";
        // adding header tag to the  text column
        text_column.appendChild(header_tag);


        // paragraph tag for occupation
        const occupation = document.createElement('p');
        occupation.className = 'occupation-text';
        occupation.textContent = "[user's occupation]";
        // Adding paragraph tag to text_columns
        text_column.appendChild(occupation);

        // paragraph tag for Location
        const location = document.createElement('p');
        location.className = 'location-text';
        location.textContent = "[Province, Local location]";
        // Adding paragraph tag to text_columns
        text_column.appendChild(location);

        // paragraph text for Price
        const price = document.createElement('p');
        price.className = 'price-text';
        price.textContent = "[R0.00]";
        // Adding paragraph text to text columns
        text_column.appendChild(price);

        // paragraph text for viewing services
        const service_view = document.createElement('a');
        service_view.className = 'view_service';
        service_view.textContent = "View Service";
        // Adding paragraph text to text columns
        text_column.appendChild(service_view);


        // adding columns ta to cardElement
        cardElement.appendChild(columns);
        
        
        cardContainer.appendChild(prevBtn);
        cardContainer.appendChild(pageNumbers);
        cardContainer.appendChild(nextBtn);

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
            updatePageNumbers();
            renderCards();
        });
        pageNumbers.appendChild(pageNumberButton);
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
