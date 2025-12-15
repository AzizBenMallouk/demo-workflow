// app/index.js (Simple Express App)
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bissmilllah, waaaaaaaaaaaaaaaaaaaaa!');
});

// Health check endpoint for end-to-end test
app.get('/health-check', (req, res) => {
  // In a real app, this would check database connectivity, etc.
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});