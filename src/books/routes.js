const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, updateBookAuthor, deleteBookByTitle, findOneAndReplace} = require("./controllers");

bookRouter.post("/books/addbook", addBook); 

bookRouter.get("/books/getallbooks", getAllBooks);

bookRouter.put("/books/updatebookauthor", updateBookAuthor);

bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);

bookRouter.put("/books/findoneandreplace", findOneAndReplace);


module.exports = bookRouter;

