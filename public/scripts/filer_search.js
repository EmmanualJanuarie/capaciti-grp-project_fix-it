//capturing the search input
const searchInput = document.querySelector('#search_bar input');

searchInput.addEventListener('input', () => {
    currentPage = 1; // Reset to the first page on new search
    renderCards();
});

//filtering the taskers
function filterTaskers() {
    const searchTerm = searchInput.value.toLowerCase();
    return taskers.filter(tasker => {
        return tasker.name.toLowerCase().includes(searchTerm) ||
               tasker.occupation.toLowerCase().includes(searchTerm) ||
               tasker.province.toLowerCase().includes(searchTerm) ||
               tasker.category.toLowerCase().includes(searchTerm) ||
               tasker.localLocation.toLowerCase().includes(searchTerm);
    });


}


//update the rendered cards
function renderCards() {
    cardContainer.innerHTML = ''; // clear current cards content
    const filteredTaskers = filterTaskers(); // Get filtered taskers
    const start = (currentPage - 1) * cardsPerPage; // calculates starting index of cards to be displayed on viewed page
    const end = start + cardsPerPage; // Determines the ending index
    const visibleTaskers = filteredTaskers.slice(start, end); // Obtain subset of the filtered taskers

    if (visibleTaskers.length === 0) {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.style = "color:orange; font-size:40px"
        noResultsMessage.textContent = "No match is found!";
        cardContainer.appendChild(noResultsMessage);
        return; // Exit the function if no results
    }

    visibleTaskers.forEach((tasker) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'pag-card';
        cardContainer.appendChild(cardElement);

        // js script for column
        const columns = document.createElement('div');
        columns.className = 'pag-columns';

        // js script for the two columns
        // column 1
        const img_column = document.createElement('div');
        img_column.className = 'img-column';
        columns.appendChild(img_column);

        // Adding image tag to image column
        const imgTag = document.createElement('img');
        imgTag.className = 'image-item';
        img_column.appendChild(imgTag); // adding image tag to image column

        // Adding image to src attribute
        imgTag.src = `../../src/img/${tasker.image_name}`;

        // column 2
        const text_column = document.createElement('div');
        text_column.className = 'text-column';
        columns.appendChild(text_column);

        // creating header 1 tag
        const header_tag = document.createElement('h1');
        header_tag.className = 'header-text';
        header_tag.textContent = tasker.name;
        text_column.appendChild(header_tag);

        // paragraph tag for occupation
        const occupation = document.createElement('p');
        occupation.className = 'occupation-text';
        occupation.textContent = tasker.occupation;
        text_column.appendChild(occupation);

        // paragraph tag for Location
        const location = document.createElement('p');
        location.className = 'location-text';
        location.textContent = `${tasker.province}, ${tasker.localLocation}`;
        text_column.appendChild(location);

        // paragraph text for Price
        const price = document.createElement('p');
        price.className = 'price-text';
        price.textContent = tasker.price;
        text_column.appendChild(price);

        // paragraph text for viewing services
        const service_view = document.createElement('a');
        service_view.className = 'view_service';
        service_view.textContent = "View Service";
        text_column.appendChild(service_view);

        // adding columns to cardElement
        cardElement.appendChild(columns);

        cardContainer.appendChild(prevBtn);
        cardContainer.appendChild(pageNumbers);
        cardContainer.appendChild(nextBtn);
    });

    // Update button states
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= filteredTaskers.length;

    updatePageNumbers(filteredTaskers.length);
}

//handeling pagination
function updatePageNumbers(totalFiltered) {
    pageNumbers.innerHTML = '';
    const totalPages = Math.ceil(totalFiltered / cardsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const pageNumberButton = document.createElement('button');
        pageNumberButton.innerText = i;
        pageNumberButton.className = i === currentPage ? 'active' : '';
        pageNumberButton.addEventListener('click', () => {
            currentPage = i;
            updatePageNumbers(totalFiltered);
            renderCards();
        });
        pageNumbers.appendChild(pageNumberButton);
    }
}

if(searchInput.value == "sophie"){
    prevBtn.style.display = "none"
    pageNumbers.style.display = "none"
    nextBtn.style.display = "none"
}