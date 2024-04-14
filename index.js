const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'pictures')));
app.use(express.static(path.join(__dirname, 'stylesheets')));
app.use(express.urlencoded({ extended: true }));

app.get('/gulash', (req, res) => {
    res.render('gulash')
})





app.listen(3000, console.log('app running'));