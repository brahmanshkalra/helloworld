/*********************************************************************************
* WEB322 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Brahmansh Kalra     Student ID: 155401219  Date: 17/01/2023
*
* Online (Cyclic) URL:https://cautious-slippers-crow.cyclic.app/
*
********************************************************************************/ 

const express =  require("express");
var http_port = process.env.PORT || 8000;
var app =  express();

app.get("/", (reg, res) =>{
    res.send("<h1>Brahmansh Kalra - 155401219<h1>");
});

app.listen(http_port);