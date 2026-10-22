const express = require("express");

const app = express();

app.use(express.json());

const notes = [];


//method Post

app.post('/notes', (req,res) => {
    // console.log(req.body);

    notes.push(req.body)
    res.status(201).json({
        message: "note created successfully"
    });
});


//method Get

app.get('/notes',(req,res) => {

    res.status(200).json({
        message: "notes feched sucessfully",
        notes: notes
    });

});


//method Delete

app.delete('/notes/:index',(req,res) => {
    const index = req.params.index
        
    delete notes[ index ];

    res.status(200).json({
        message: "note deleted successfully"
    });
   
    });


//method Patch    

app.patch('/notes/:index',(req,res) => {

    const index = req.params.index

    const descripton = req.body.description

    notes [ index ].description = descripton
    
    res.status(2000).json({
        message: "note updated successfully"
    });
});



module.exports = app