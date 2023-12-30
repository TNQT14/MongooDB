const express = require('express');
const routes = express.Router();

const mongoose = require('mongoose');
const app = express()

mongoose.connect('mongodb://gunner:123423423@172.16.0.124:27102/hcm_backen_test')

app.listen(3012, () => {
    console.log("Server is running hcm_backen_test2")
})