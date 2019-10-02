require('dotenv').config(); // Sets up dotenv as soon as our application starts

const express = require('express');
const app = express();

const environment = process.env.NODE_ENV; // development
const stage = require('./config')[environment];

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
    
    res.render('pages/index',{
        drinks: drinks,
        tagline: tagline
    })
})

app.get('/about',(req,res)=>{
    res.render('pages/about')
})

app.listen(`${stage.port}`, () => {
  console.log(`Server now listening at localhost:${stage.port}`);
});