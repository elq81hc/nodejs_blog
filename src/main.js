
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars')
const port = 3000;
const app = express();
// // static files
app.use(express.static(path.join('./src/', 'public')));

// Template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resource/views');

// // server listener
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/search', (req, res) => {})
app.post('/search', (req, res) => {})
app.get('/news', (req, res) => {
    res.send('Hello world')
})
app.get('/greet', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
