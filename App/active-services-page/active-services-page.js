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



// Sample data for taskers
const taskers = [
    { image_name: "featured_users/mechanic.jpg", name: "John Doe", occupation: "Mechanic", category: "Automative Service", province: "Eastern Cape", localLocation: "Uitenhage", price: 150 },
    { image_name: "featured_users/tutor.jpg", name: "Karen Foster", occupation: "Tutor", category: "Education", province: "Eastern Cape", localLocation: "Port Elizabeth", price: 200 },
    { image_name: "featured_users/graphic_designer.jpg", name: "Lisa Langehoven", occupation: "Graphic Designer", category: "Creative Service", province: "Eastern Cape", localLocation: "Despatch", price: 400 },
    { image_name: "featured_users/home_improvement.jpg", name: "John Smith", occupation: "Landscaper", category: "Manual Labour", province: "Gauteng", localLocation: "Johannesburg", price: 250 },
    { image_name: "featured_users/plumber.jpg", name: "Daniel Baker", occupation: "Plumber", category: "Plumbing and Pipefitting", province: "Western Cape", localLocation: "Stellenbosch", price: 450 },
    { image_name: "featured_users/information_tech.jpg", name: "Grace Baker", occupation: "Network Developer", category: "Information Technology", province: "KwaZulu-Natal", localLocation: "Pietermaritzburg", price: 600 },
    { image_name: "featured_users/party_planner.jpg", name: "Sophie Brown", occupation: "Party Planner", category: "Entertainment and Leisure", province: "Western Cape", localLocation: "Cape Town", price: 200 },
    { image_name: "featured_users/party_planner_2.jpg", name: "Alexa Bebe", occupation: "Party Planner", category: "Entertainment and Leisure", province: "Western Cape", localLocation: "Cape Town", price: 200 },
    { image_name: "featured_users/cleaning_service.jpg", name: "Liam Johnson", occupation: "Cleaning Service", category: "Specialty Cleaning", province: "Gauteng", localLocation: "Johannesburg", price: 150 },
    { image_name: "featured_users/gardener.jpg", name: "Emma Wilson", occupation: "Gardener", category: "Home Improvement and Renovation", province: "KwaZulu-Natal", localLocation: "Durban", price: 180 },
    { image_name: "featured_users/plumber_2.jpg", name: "Noah Smith", occupation: "Plumber", category: "Plumbing and Pipefitting", province: "Gauteng", localLocation: "Pretoria", price: 250 },
    { image_name: "featured_users/electrician.jpg", name: "Oliver Davis", occupation: "Electrician", category: "Home Improvement and Renovation", province: "Western Cape", localLocation: "Cape Town", price: 300 },
    { image_name: "featured_users/photographer.jpg", name: "Ava Martinez", occupation: "Photographer", category: "Entertainment and Leisure", province: "Gauteng", localLocation: "Johannesburg", price: 400 },
    { image_name: "featured_users/caterer.jpg", name: "Isabella Garcia", occupation: "Caterer", category: "Hospitality", province: "Western Cape", localLocation: "Cape Town", price: 500 },
    { image_name: "featured_users/handyman.jpg", name: "Mason Rodriguez", occupation: "Handyman", category: "Manual Labour", province: "Gauteng", localLocation: "Pretoria", price: 220 },
    { image_name: "featured_users/graphic_designer_2.jpg", name: "Sophia Lee", occupation: "Graphic Designer", category: "Creative Service", province: "KwaZulu-Natal", localLocation: "Durban", price: 350 },
    { image_name: "featured_users/web_developer.jpg", name: "James Anderson", occupation: "Web Developer", category: "Information Technology", province: "Gauteng", localLocation: "Johannesburg", price: 600 },
    { image_name: "featured_users/fitness_trainer.jpg", name: "Charlotte Thomas", occupation: "Fitness Trainer", category: "Health and Fitness", province: "Western Cape", localLocation: "Cape Town", price: 300 },
    { image_name: "featured_users/translator.jpg", name: "Benjamin White", occupation: "Translator", category: "Education", province: "Gauteng", localLocation: "Pretoria", price: 250 },
    { image_name: "featured_users/real_estate_agent.jpg", name: "Amelia Harris", occupation: "Real Estate Agent", category: "Financial and Insurance", province: "Western Cape", localLocation: "Cape Town", price: 700 },
    { image_name: "featured_users/voice_actor.jpg", name: "Lucas Clark", occupation: "Voice Actor", category: "Creative Service", province: "Gauteng", localLocation: "Johannesburg", price: 400 },
    { image_name: "featured_users/financial_advisor.jpg", name: "Mia Lewis", occupation: "Financial Advisor", category: "Financial and Insurance", province: "KwaZulu-Natal", localLocation: "Durban", price: 500 },
    { image_name: "featured_users/marketing_specialist.jpg", name: "Ethan Walker", occupation: "Marketing Specialist", category: "Financial and Insurance", province: "Gauteng", localLocation: "Pretoria", price: 450 },
    { image_name: "featured_users/seo_expert.jpg", name: "Harper Hall", occupation: "SEO Expert", category: "Information Technology", province: "Western Cape", localLocation: "Cape Town", price: 550 },
    { image_name: "featured_users/ux_designer.jpg", name: "Alexander Allen", occupation: "UX Designer", category: "Creative Service", province: "Gauteng", localLocation: "Johannesburg", price: 600 },
    { image_name: "featured_users/virtual_assistant.jpg", name: "Ella Young", occupation: "Virtual Assistant", category: "Clerical Work", province: "KwaZulu-Natal", localLocation: "Durban", price: 200 },
    { image_name: "featured_users/landscaper.jpg", name: "Daniel King", occupation: "Landscaper", category: "Manual Labour", province: "Gauteng", localLocation: "Pretoria", price: 300 },
    { image_name: "featured_users/cleaning_service_2.jpg", name: "Grace Wright", occupation: "Cleaning Service", category: "Specialty Cleaning", province: "Western Cape", localLocation: "Cape Town", price: 150 },
    { image_name: "featured_users/personal_trainer_2.jpg", name: "Henry Scott", occupation: "Personal Trainer", category: "Health and Fitness", province: "Gauteng", localLocation: "Johannesburg", price: 670 },
    { image_name: "featured_users/party_planner_3.jpg", name: "Zoe Green", occupation: "Party Planner", category: "Entertainment and Leisure", province: "KwaZulu-Natal", localLocation: "Durban", price: 250 },
    { image_name: "featured_users/chef.jpg", name: "Oliver Adams", occupation: "Chef", category: "Hospitality", province: "Gauteng", localLocation: "Pretoria", price: 400 },
    { image_name: "featured_users/artist.jpg", name: "Lily Baker", occupation: "Artist", category: "Creative Service", province: "Western Cape", localLocation: "Cape Town", price: 300 },
    { image_name: "featured_users/voice_coach.jpg", name: "Jack Nelson", occupation: "Voice Coach", category: "Education", province: "Gauteng", localLocation: "Johannesburg", price: 450 },
    { image_name: "featured_users/it_support.jpg", name: "Sofia Carter", occupation: "IT Support", category: "Information Technology", province: "KwaZulu-Natal", localLocation: "Durban", price: 250 },
    { image_name: "featured_users/financial_planner_3.jpg", name: "Michael Mitchell", occupation: "Financial Planner", category: "Financial and Insurance", province: "Gauteng", localLocation: "Pretoria", price: 600 },
    { image_name: "featured_users/photographer_2.jpg", name: "Ava Perez", occupation: "Photographer", category: "Entertainment and Leisure", province: "Western Cape", localLocation: "Cape Town", price: 500 },
    { image_name: "featured_users/landscaper_2.jpg", name: "Lucas Roberts", occupation: "Landscaper", category: "Manual Labour", province: "Gauteng", localLocation: "Johannesburg", price: 300 },
    { image_name: "featured_users/cleaning_service_3.jpg", name: "Mia Turner", occupation: "Cleaning Service", category: "Specialty Cleaning", province: "KwaZulu-Natal", localLocation: "Durban", price: 150 },
    { image_name: "featured_users/graphic_designer_3.jpg", name: "Ethan Phillips", occupation: "Graphic Designer", category: "Creative Service", province: "Gauteng", localLocation: "Pretoria", price: 350 },
    { image_name: "featured_users/marketing_consultant.jpg", name: "Ella Campbell", occupation: "Marketing Consultant", category: "Financial and Insurance", province: "Western Cape", localLocation: "Cape Town", price: 500 },
    { image_name: "featured_users/fitness_instructor.jpg", name: "James Evans", occupation: "Fitness Instructor", category: "Health and Fitness", province: "Gauteng", localLocation: "Johannesburg", price: 300 },
    { image_name: "featured_users/translator_2.jpg", name: "Charlotte Edwards", occupation: "Translator", category: "Education", province: "KwaZulu-Natal", localLocation: "Durban", price: 250 }
]

// renders amount of cards
const cards = Array.from({ length: 42 }, (_, i) => `Card ${i + 1}`);

// constant variable for total amount of cards per page
const cardsPerPage = 21;

// determines the current page by default value
let currentPage = 1;

const cardContainer = document.getElementById('card-container');
const prevBtn = document.getElementById('prev-button');
const nextBtn = document.getElementById('next-button');
const pageNumbers = document.getElementById('page-numbers');

// Function to render cards
function renderCards() {
    cardContainer.innerHTML = ''; // clear current cards content
    const start = (currentPage - 1) * cardsPerPage; // calculates starting index of cards to be displayed on viewed page
    const end = start + cardsPerPage; // Determines the ending index
    const visibleCards = cards.slice(start, end); // Obtains subset of the cards (determines the amount of cards shown at view)

    visibleCards.forEach((_, index) => {
        const tasker = taskers[start + index]; // Get the corresponding tasker based on the current page

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
        price.textContent = `R${tasker.price}.00`;
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
    nextBtn.disabled = end >= cards.length;

    updatePageNumbers();
}

function updatePageNumbers() {
    pageNumbers.innerHTML = '';
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    for (let i =  1; i <= totalPages; i++) {
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

nextBtn.addEventListener('click', () => {
    currentPage++;
    renderCards();
});

renderCards();