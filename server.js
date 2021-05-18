const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 4000;
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