const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');


router.post("/list",async function(req,resp){
    var notes = await Note.find({userid: req.body.userid});
    resp.json(notes);
});

router.post("/add",async function(req,resp){

  await Note.deleteOne({id: req.body.id});
    
   const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
   await newNote.save();

   const response = {
    message: "new Note Created!" + 'id: ${req.body.id}'
   };
    resp.json(response);
});

router.post("/delete",async function(req,resp){
    await Note.deleteOne({id: req.body.id});

    const response = {
        message: "Note deleted!" + 'id: ${req.body.id}'
       };
        resp.json(response);

});

module.exports = router;