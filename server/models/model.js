const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const Users = mongoose.model("SignedUp", signUpTemplate);
module.exports = Users