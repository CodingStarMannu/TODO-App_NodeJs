const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todo_app_development');

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error connecting to mongoDB"));


db.once('open',function(){
    console.log('Connected to the database::MongoDB');
});

module.exports = db;