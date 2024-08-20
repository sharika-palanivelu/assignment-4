// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional for serving CSS, images, etc.)
app.use(express.static('public'));

// Render the form on the home route
app.get('/', (req, res) => {
  res.send(`
    <form action="/submit-form" method="POST">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email } = req.body;
  res.send(`Thank you for submitting your information, ${name}. We have your email as ${email}.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});