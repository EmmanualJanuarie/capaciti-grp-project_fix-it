const client_img = document.getElementById('client_img');//variable for img tag

const  client_name = document.getElementById('client_name');//variable for client name

const client_occupation = document.getElementById('client_occupation'); //tvariable for cleint occupation

const client_location = document.getElementById('client_location'); //variable for client location

const client_price = document.getElementById('client_price'); //variable for client price

const client_email = document.getElementById('client_email'); //variable for client email

const client_cell = document.getElementById('client_cel'); //variable for client cell

// populating variables with localstorage set items

// Check localStorage values
const imgName = localStorage.getItem('client_Imgname');
if (imgName) {
    const trimmedImgName = imgName.trim();
    const imgPath = `/src/${trimmedImgName}`; // Adjust this path if necessary
    console.log('Constructed image path:', imgPath); // Log the constructed path
    client_img.src = imgPath;

    client_img.onerror = function() {
        console.error('Failed to load image:', imgPath);
    };
} else {
    console.error('client_Imgname not found in localStorage');
}
client_name.textContent = localStorage.getItem('client_name');

client_occupation.textContent = localStorage.getItem('client_occupation');

client_location.textContent = localStorage.getItem('client_location');

client_price.textContent = localStorage.getItem('client_price') + " "+"per day";

client_email.textContent = localStorage.getItem('client_email');

client_cell.textContent = localStorage.getItem('client_cell');

window.onclose(localStorage.clear());

