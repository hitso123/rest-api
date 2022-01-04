const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();

//get a list of ninjas from the db
router.get('/ninjas',(req,res) => {
    res.send({type:'Get'});
});

//add a new ninja to the db
router.post('/ninjas',(req,res) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

//update a ninja in the db
router.put('/ninjas/:id',(req,res) => {
    res.send({type:'PUT'});
});


//Delete a ninja from the db
router.delete('/ninjas/:id',(req,res) => {
    res.send({type:'DELETE'});
});

module.exports = router;
