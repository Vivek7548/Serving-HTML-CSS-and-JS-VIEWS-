const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router =  express.Router();
// /shop => GET
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,  'views', 'shop.html'));
});


// /login POST
// router.post('/', (req, res, next) =>{
//     console.log(req.body);
//     res.redirect('/');
// });

module.exports = router;