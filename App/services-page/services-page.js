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
