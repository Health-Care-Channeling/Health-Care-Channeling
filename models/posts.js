const mongoose = require('mongoose');

const postSchema =new mongoose.Schema({
    fname:{
        type:String,
        require:true
    },
    lname:{
        type:String,
        require:true
    },
    emailadd:{
        type:String,
        require:true
    },
    mobileno:{
        type:String,
        require:true
    },
    idcard:{
        type:String,
        require:true
    },
    dateofb:{
        type:Date,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    Eid:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    statuss:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    idtype:{
        type:String,
        require:true
    },
    salarym:{
        type:String,
        require:true
    },
    salarys:{
        type:String,
        require:true
    },
    salary:{
        type:String,
        require:true
    }
    
});
module.exports=mongoose.model('employee',postSchema);