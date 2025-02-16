// Variable for category section
let categories_section = document.getElementById('categories_section');

// event listener for category section to toggle section
document.getElementById('close_btn').addEventListener('click', () => {
    categories_section.style.display = "none";
    
});

// event listener for category section to remove section
document.getElementById('cat_dropdown').addEventListener('click', () => {
    categories_section.style.display = "block";
});
