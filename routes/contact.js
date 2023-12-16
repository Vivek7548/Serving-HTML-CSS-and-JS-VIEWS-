const path = require('path');
const express = require('express');


const rootDir = require('../util/path');

const router = express.Router();

// / => GET
router.get('/contact',(req, res, next) =>{
    res.sendFile(path.join(rootDir,  'views', 'contact.html'));
});

// / => POST
router.post('/contact', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/success')
});


module.exports = router;