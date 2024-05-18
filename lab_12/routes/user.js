const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/user', (req, res, next) => {
    console.log('inside user');
    res.sendFile(path.join(__dirname, '..', 'views', 'index2.html'));

    // throw new Error('Whoops!!!');
    // next('222222232323');
});

module.exports = router;