const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'products.html'));
});

router.post('/', (req, res) => {
    // Handle POST request
    res.send('Product data received');
});

module.exports = router;
