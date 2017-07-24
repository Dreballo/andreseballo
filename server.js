// Initialize dependencies
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

//express server
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//serve static folder
app.use(express.static("./public"));

//serve app from static file
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
   console.log(`App listening on ${PORT}`);
});