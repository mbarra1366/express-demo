const express = require('express');
const router = express.Router();

// This is the function what will be called when we have an
// http request to this endpoint
router.get('/', (req, res) => {
    res.render('index', { title: 'My Express App', message: 'Hello' });
});

module.exports = router;