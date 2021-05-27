const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || "https://pacific-mesa-89997.herokuapp.com/";
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Cards With Corgis API</h1>")
})


app.use("/party", routes.party);
app.use("/card", routes.card);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})