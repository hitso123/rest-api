const Mongoose =require('mongoose');
const Schema = Mongoose.Schema;

//create ninja Schema & model 
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name feild is required"]
    },
    rank:{
        typr:String,
    },
    available: {
        type:Boolean,
        default:false
    }
    //add in geo location 

});

const Ninja = Mongoose.model('ninja',NinjaSchema);
module.exports=Ninja;