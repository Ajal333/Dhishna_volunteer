const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');

//setting routes
const data_routes = require("./routes/volunteer.route");

// Establish a database connection
mongoose.connect('mongodb://localhost/dhishna');

//Create server
const server = express();

//Use assets
server.use("/assets/css", express.static(__dirname + "/assets/css"));
server.use("/onday_details",data_routes);

//Setting view engine
server.set("view engine","ejs");

//Show static page
server.get('/',(req,res) => {
        res.render('index');
});

server.listen(3000);
