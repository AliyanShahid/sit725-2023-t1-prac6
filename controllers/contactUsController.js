const express = require('express');
const router = express.Router();
const ContactUs = require('../models/ContactUs');

router.post('/', async (req, res) => {
    const { name, email, tel, textarea } = req.body;

    try {
        await ContactUs.create({
            name: name,
            email: email,
            tel: tel,
            textarea: textarea
        });
        res.send({ status: "Ok" });
    } catch (error) {
        res.send({ status: "Error" });
    }
});

module.exports = router;
