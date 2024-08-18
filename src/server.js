// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    // Process the form data (store in database, etc.)
    console.log(formData);
    res.send({ message: 'Form submitted successfully' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
