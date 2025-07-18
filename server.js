const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Serve the entire public directory

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('Server is running on port: ', PORT);
});