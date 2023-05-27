// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
// const mongoose = require('mongoose');
// const _=require("lodash");
const qr=require('html5-qrcode')
// Create express app
const app = express();
// Set view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

const port = 3000; // Port number

//routes
app.get("/", (req, res) => {    
    res.render("Login_Page");
    
});
app.get("/CS", (req, res) => {
    res.render("Enter_Credentials_Students");   
});
app.get("/CF", (req, res) => {
    res.render("Enter_Credentials_Faculty");   
});

app.get("/DS", (req, res) => {
   res.render("Desktop_Student",{studName:"Test"});       
});

app.get("/DF", (req, res) => {
    res.render("Desktop_Faculty");   
});

app.get("/DQR", (req, res) => {
    res.render("Display_QR");
});

app.get("/SQR", (req, res) => {
    res.render("index");
    // console.log("SQR");
    // res.sendFile(__dirname+"/pages/index.html");
});
app.get("/AR", (req, res) => {
    res.render("Attendance_Recorded");
});
// listening to port 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});