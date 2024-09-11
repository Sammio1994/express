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
// post

app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.genre );

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

    // const book = "hello"
    response.send({ message:  "success", book: book });
})

// get all the books

app.get("/book/getallbooks", async (request, response) => {
    try {
    const books = await Book.find({});
    response.send({ message:  "success", allbooks: books });
    } catch (error) {
    console.log(error)
    }
})

// 
// delete one book by title

app.delete("/book/deletebookbytitle", async (request, response) => {

    const deletedBook = await Book.deleteOne({bookName: request.body.bookName});
 
response.send({message: "success", deletedBook: deletedBook});
 
    // try {
    // const book = await Book.deleteOne({ name: 'book 1' });
    // response.send({ message: "success", bookbytitle, book});
    // } catch (error) {
    //     console.log(error)
    // }
});

app.get("/books/addbook", (request, response) => {

    response.send({message: "success" });
});

app.get("/books/allbooks" , (request, response) => {
    response.send( "success" );
}) 



app.listen(5000, () => {
    console.log("Server is listening on port 5000")
});


// Assignment 

// POST - adds a book to the database

app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.genre );

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

    response.send({ message:  "success", book: book });
})

// GET - gets all books from the database

app.get("/book/getallbooks", async (request, response) => {
    try {
    const books = await Book.find({});
    response.send({ message:  "success", allbooks: books });
    } catch (error) {
    console.log(error)
    }
})

// PUT - updates a book author (filter by title)

app.put("/books/updatebookauthor", async (request, response) =>{
    const author = await Book.findOneAndUpdate({ title: request.body.title}, {author: request.body.author});
    response.send({ message: "success", bookauthor: author })
}); 


// Alternative PUT

app.put("/books/updatebookauthor", async (request, response) => {
    try {
        // Log incoming request data
        console.log('Request Body:', request.body);

        // Perform the update
        const updatedBook = await Book.findOneAndUpdate(
            { title: request.body.title },
            { author: request.body.author },
            { new: true } // This option returns the updated document
        );

        // Check if the book was found and updated
        if (updatedBook) {
            console.log('Updated Book:', updatedBook); // Log the updated book data
            response.send({ message: "success", bookauthor: updatedBook });
        } else {
            console.log('Book not found'); // Log when no book is found
            response.status(404).send({ message: "Book not found" });
        }
    } catch (error) {
        console.log('Error:', error.message); // Log the error message
        response.status(500).send({ message: "An error occurred", error: error.message });
    }
});



// DELETE - deletes a single book from the database

app.delete("/book/deletebookbytitle", async (request, response) => {

    const deletedBook = await Book.deleteOne({bookName: request.body.bookName});
 
response.send({message: "success", deletedBook: deletedBook});

});

// import express from "express";