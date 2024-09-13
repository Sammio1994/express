const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, updateBookAuthor, deleteBookByTitle, findOneAndReplace, deleteAllBooks, } = require("./controllers");
// getBookByTitle

bookRouter.post("/books/addbook", addBook); 

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.put("/books/updatebookauthor", updateBookAuthor);

bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);

bookRouter.put("/books/findoneandreplace", findOneAndReplace);

bookRouter.delete("/books/deleteallbooks", deleteAllBooks);

// bookRouter.get("/books/getbookbytitle", getBookByTitle);


module.exports = bookRouter;

