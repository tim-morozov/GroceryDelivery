const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));