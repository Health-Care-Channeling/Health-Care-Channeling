const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    Employeeid:{
        type:String,
        require:true
    },
    reason:{
        type:String,
        require:true
    },
    pending:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
    
});
module.exports=mongoose.model('Leave',postSchema);