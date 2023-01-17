const express =  require("express");
var http_port = process.env.PORT || 8000;
var app =  express();

app.get("/", (reg, res) =>{
    res.send("<h1>Hello world<h1>");
});

app.listen(http_port);