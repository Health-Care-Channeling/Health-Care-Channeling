const express =require('express');
const mongoose =require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');

const app =express();
//import routes
const postRoutes = require('./routes/salary');

//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);


const PORT = 8000;
const DB_URL='mongodb+srv://react:react@murnapp.zuzt2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(DB_URL,{
   useNewUrlParser:true,
   useNewUrlParser:true
})
.then(()=>{
    console.log('DB CONNECTED');

})
.catch((err)=> console.log('DB CONNECTION ERROR',err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

