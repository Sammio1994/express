const express = require("express");

const app = express();

app.use(express.json());

const fakeDB = [];

app.get("/books/onebook", (request, response) => {
    const book = {
        title:"book1",
        author: "harry",
        genra: "sports",
    }
    response.send({message: "success", book: book});
});

app.get("/books/fakeDB", (request, response) => {

    response.send({message: "success", books: fakeDB});
});

app.get("/books/allbooks" , (request, response) => {
    response.send("hello all books");
}) 

app.post("/books", (request, response) => {
    fakeDB.push(request.body);
    response.send({message: `${request.body.title} has been added` , book:request.body});
}

)

app.get("/movies/OneMovie", (request, response) => {
    
    response.send("One Movie");
});

app.put("/movies/updatemovie", (request, response) => {
    response.send("update movie");
});

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});



// import express from "express";
