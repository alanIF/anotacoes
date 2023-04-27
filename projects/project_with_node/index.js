console.log('Hello from the other side');
const mongoose = require("mongoose");
const dbURI= "mongodb+srv://alanmedeiros53:IA9YLzOB6OkvJhWf@testeaplication.19dv7cg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    function(result){
        console.log("connect"); 
    }
).catch((err)=> console.log(err));