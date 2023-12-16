
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin');
const contactRoutes = require('./routes/contact')
const successRoutes = require('./routes/success');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);

app.use(contactRoutes);

app.use(shopRoutes);

app.use(successRoutes);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname,  'views', '404.html'));
});

app.listen(5000);