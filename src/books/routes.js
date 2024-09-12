const {Router} = require("express");
const bookRouter = Router();

const Book = require("./model");

bookRouter.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.genre );

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

    response.send({ message:  "success", book: book });
})

// bookRouter.get()
// bookRouter.delete()

module.exports = bookRouter;