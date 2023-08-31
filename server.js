const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const port = process.env.PORT || 3000;

// Serve static files from the 'PP3' folder
app.use(express.static(path.join(__dirname, 'PP3')));

// Set Egypt news as the default homepage
app.get('/', (req, res) => {
  res.sendFile('p3.html', { root: path.join(__dirname, 'PP3') });
});

app.get('/api', async (req, res) => {
  const { q, pageNo } = req.query; // Extract 'q' and 'pageNo' from query parameters
  const apiKey = 'd9efafcc5aa8465684caefcf4f4dc20b'; // Replace with your News API key
  const pageSize = 10;

  // Calculate the 'from' date as one week ago from the current date
  const fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - 7); // Adjust the number of days as needed

  // Construct the API request URL with the 'from' parameter
  const apiUrl = `https://newsapi.org/v2/everything?q=${q}&page=${pageNo}&pageSize=${pageSize}&apiKey=${apiKey}&from=${fromDate.toISOString()}`;

  try {
    let response = await axios(apiUrl);
    let data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
