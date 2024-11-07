const express = require('express');
const app = express();
const port = 3000;

// Import readData directly from files.js
const { readData } = require('./files.js'); // Make sure the path is correct

// GET route for fetching all users
app.get('/api/users', async (req, res) => {
    try {
        // Directly use readData to get the list of items from data.json
        const users = await readData();
        res.status(200).json(users); // Send the user list as JSON response
    } catch (error) {
        console.error("Error fetching user list:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
