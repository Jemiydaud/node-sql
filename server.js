const express = require("express");
const app = express();
require("dotenv").config();
const pg = require("pg");


const port = process.env.PORT || 8080;
const host = process.env.HOST || 8080;
const url = process.env.URL;

app.get("/",(req,res) => {
    console.log("My name is Jemi ");
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("You Rock");
});

app.listen(port, host, () => {
    console.log(`Server is listening ${host}:${port}`);
}) 

