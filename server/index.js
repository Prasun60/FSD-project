// backend libraries are
// express, mongoose, body-parser, cors, nodemon
// dotenv, bcrypt, jsonwebtoken

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const allroutes = require('./routes/index.js');


const app = express();

app.use(cors({
    origin : "*",
    credentials : true,
    methods :["GET", "POST", "DELETE", "PUT", "PATCH"],
}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb+srv://abhi:abcd@cluster0.o6xci3c.mongodb.net/')
.then(() => {
    console.log("Connected to database");
})
.catch((error) => {
    console.log("Error connecting to database", error);
})


app.use("/", allroutes)




app.listen(4300, () => {
    console.log("Server is running");
})