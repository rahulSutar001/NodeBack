const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());

// Routing
const posts = require('./routs/api/post');
app.use('/', posts);

// PORT
const port = process.env.PORT || 8081;

// Server Started on port
app.listen(port, () => console.log(`server started on the port ${port}`));