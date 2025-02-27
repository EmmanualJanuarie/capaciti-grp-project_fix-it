// Variable for category section

// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "none";
    document.getElementById('fixit_inquiry_section').style.display = "block";
    document.getElementById('services_categories_cards').style.display = "block";
    document.getElementById('join_us_section').style.display = "block";
    document.getElementById('footer_section').style.display = "block";
    document.getElementById('Services_info_section').style.display = "block";
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    document.getElementById('categories_section').style.display = "block";
    document.getElementById('fixit_inquiry_section').style.display = "none";
    document.getElementById('services_categories_cards').style.display = "none";
    document.getElementById('join_us_section').style.display = "none";
    document.getElementById('footer_section').style.display = "none";
    document.getElementById('Services_info_section').style.display = "none";
});
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");
const reviewText = document.getElementById("review");
const submitBtn = document.getElementById("submit");
const reviewsContainer = document.getElementById("reviews");

stars.forEach((star) => {
	star.addEventListener("click", () => {
		const value = parseInt(star.getAttribute("data-value"));
		rating.innerText = value;

		// Remove all existing classes from stars
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five"));

		// Add the appropriate class to 
		// each star based on the selected star's value
		stars.forEach((s, index) => {
			if (index < value) {
				s.classList.add(getStarColorClass(value));
			}
		});

		// Remove "selected" class from all stars
		stars.forEach((s) => s.classList.remove("selected"));
		// Add "selected" class to the clicked star
		star.classList.add("selected");
	});
});

submitBtn.addEventListener("click", () => {
	const review = reviewText.value;
	const userRating = parseInt(rating.innerText);

	if (!userRating || !review) {
		alert(
"Please select a rating and provide a review before submitting."
			);
		return;
	}

	if (userRating > 0) {
		const reviewElement = document.createElement("div");
		reviewElement.classList.add("review");
		reviewElement.innerHTML = 
`<p><strong>Rating: ${userRating}/5</strong></p><p>${review}</p>`;
		reviewsContainer.appendChild(reviewElement);

		// Reset styles after submitting
		reviewText.value = "";
		rating.innerText = "0";
		stars.forEach((s) => s.classList.remove("one", 
												"two", 
												"three", 
												"four", 
												"five", 
												"selected"));
	}
});

function getStarColorClass(value) {
	switch (value) {
		case 1:
			return "one";
		case 2:
			return "two";
		case 3:
			return "three";
		case 4:
			return "four";
		case 5:
			return "five";
		default:
			return "";
	}
}