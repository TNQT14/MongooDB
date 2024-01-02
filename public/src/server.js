const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');
const routes = express.Router();
require('dotenv').config()
console.log(process.env)

mongoose.connect(process.env.connectionStr,
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 7979

app.get('/', (req, res) => {
    res.send('Response from root router,hahaa')
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})