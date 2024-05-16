const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'users.html'));
});

router.post('/', (req, res) => {
    // Handle POST request
    res.send('User data received');
});

module.exports = router;
