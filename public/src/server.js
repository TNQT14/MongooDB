const express = require('express');
const routes = express.Router();

const mongoose = require('mongoose');
const app = express()

mongoose.connect('')

const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const hcmtestCreate = new Schema({
    userName: String,
    password: String,
}, {
    collection: 'Account'
});

const AccountModel = mongoose.model('account', hcmtestCreate);

AccountModel.find({})
    .then(function (data) {
        console.log('data', data);
    })
    .catch(error => {
        console.log('err', err);
    })

data => {

}

app.listen(3012, () => {
    console.log("Server is running hcm_backen_test2")
})