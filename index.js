const express = require('express');
const routes= require('./routes/api');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

// set up express app
const app=express();

//connect to db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

app.use(bodyParser.json());



app.use("/api",routes);



//listen for request
app.listen(process.env.port || 4000,function(){
    console.log("Now listining to port 4000");
});