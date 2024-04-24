const mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: String,
    textarea: String
});

module.exports = mongoose.model('ContactUs', ContactUsSchema);
