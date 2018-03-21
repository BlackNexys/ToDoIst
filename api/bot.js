const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require("./config.json");

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.use(bodyParser.json());

// Models
require('./models/todo');

// Routes
require('./routes/todoRoutes')(app);

// Connect to mongoDB
mongoose.connect(config.mongoURI);

const port =  8000;
app.listen(port);

console.log("Listens to " + port);
