const express =  require('express');
const path = require('path');
const dB = require('./config/mongoose');
const Todo = require('./models/todo');

const app = express();
const port = 8080;

//to use static folder
app.use(express.static('./static'));


//body parser  for form data
app.use(express.urlencoded());

// use express router
app.use('/', require('./routes'));

// setting ejs as view engine
app.set('view engine', 'ejs');
app.set('views','./views');


//ejs adds unnecessary white spaces this line removes them
app.locals.rmWhitespace = true;

//listening to port
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on the port: ${port}`);
});