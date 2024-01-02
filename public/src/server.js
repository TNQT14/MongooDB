const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const routes = express.Router();
require('dotenv').config()
console.log(process.env)

