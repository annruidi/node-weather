const express = require('express');
const path = require('path');
const hbs = require('hbs');
const geocode = require('./utils/geocode');

const app = express();

// Define paths for express config
app.use(express.static(path.join(__dirname, '../public')));
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.get('',(req, res) => {
   res.render('index', {
       title:'Index',
       description:'Something',
       name: 'eena'
   })
});
app.get('/help',(req, res) => {
    res.render('help', {
        title:'Help',
        description:'Heelllllllp',
        name: 'meena'
    })
 });
 app.get('/about',(req, res) => {
    res.render('about', {
        title:'About',
        description:'Nothing to see here',
        name: 'deeka'
    })
 });

 app.get('/something',(req, res) => {
     console.log(req.query);
    res.send({
        products:[]
    })
 });
 app.get('/weather', (req, res) => {
     if(req.query.address){
         geocode(req.query.address, (err, result) => {
            if(err){
                return res.send(err)
            }
            res.send(result);
         })
     }else{
         res.send('address is required');
     }
 })
app.get('/help/*',(req, res) => {
    res.render('notFound',{
        message: 'Help Text not found'
    })
 });
 app.get('*',(req, res) => {
    res.render('notFound',{
        message: 'Page Not Found'
    })
 });

app.listen(3000, () => {
    console.log('Server ready');
});