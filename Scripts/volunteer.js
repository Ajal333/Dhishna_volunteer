const user = require("../models/volunteer.model");

const mongoose = require('mongoose');

const fs = require('fs');

// make a connection
mongoose.connect('mongodb://localhost/dhishna');
 

fs.readFile('volunteer.json',(err,data) => {
    if(err) console.log(err);
    else {
        let student = JSON.parse(data);
        console.log(student);
        user.collection.insertMany(student, (data,err) => {
        if(err) console.log(err);
        console.log("Multiple files inserted");
    });
}
});

