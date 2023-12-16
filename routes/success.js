const path = require('path');
const express = require('express');


const rootDir = require('../util/path');

const router = express.Router();

// / => GET
router.get('/success',(req, res, next) =>{
    res.sendFile(path.join(rootDir,  'views', 'success.html'));
});

// / => POST
router.post('/success', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/success')
});


module.exports = router;