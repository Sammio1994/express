const express = require("express");

const app = express();

app.use(express.json());



app.get("/books/fakeDB", (request, response) => {

    response.send({message: "success" });
});

app.get("/books/allbooks" , (request, response) => {
    response.send( "success" );
}) 

app.post("/books", (request, response) => {
    response.send({message:  "success"});
}

)

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});

// import express from "express";
