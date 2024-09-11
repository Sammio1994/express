require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// db connection 

const connection = async () =>  {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is working");
}

connection(); 

// book model

const bookSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,

    }
})

const Book = mongoose.model("book", bookSchema);
 
//routes

app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.genre );

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

    response.send({ message:  "success", book: book });
});

app.get("/book/getallbooks", async (request, response) => {
    try {
    const books = await Book.find({});
    response.send({ message:  "success", allbooks: books });
    } catch (error) {
    console.log(error)
    }
})
// get all the books
 
app.get("/books/addbook", (request, response) => {

    response.send({message: "success" });
});

app.get("/books/allbooks" , (request, response) => {
    response.send( "success" );
}) 



app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});

// import express from "express";
