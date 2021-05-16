const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('<h1>Cards With Corgis API</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})