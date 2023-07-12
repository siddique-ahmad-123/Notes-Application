//initialization
const express = require("express");
const { connect } = require("http2");
const app = express();

const mongoose = require("mongoose");
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//true -> nested object (correct)
//false -> nested object(not correct)

const mongoDBpath = "mongodb+srv://Siddique_123:biochem111@cluster0.rpgdhe4.mongodb.net/notesdb";

mongoose.connect(mongoDBpath).then(function(){
    app.get("/",function(req,resp){
       const response = {message: "API Works!"};
       resp.json(response);
    });
  
    const noteRouter = require('./routes/Note');
    app.use("/notes",noteRouter);
});
//App Routes
//Home Page


//Starting the server on a Port:
const PORT = process.env.PORT;
app.listen(PORT,function(){
    console.log("Server started at port 5000 " + PORT);
});