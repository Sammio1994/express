const Book = require("./model");

const addBook = async (request, response) => {
    console.log("request.body: ", request.body.genre );

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });

    response.send({ message:  "success", book: book });
}; 


const getAllBooks = async (request, response) => {
    try {
    const books = await Book.find({});
    response.send({ message:  "success", allbooks: books });
    } catch (error) {
    console.log(error)
    }
};

const updateBookAuthor = async (request, response) =>{
    const author = await Book.findOneAndUpdate({ title: request.body.title}, {author: request.body.author});
    response.send({ message: "success", bookauthor: author })
}; 

const deleteBookByTitle = async (request, response) => {

    const deletedBook = await Book.deleteOne({title: request.body.title});
 
response.send({message: "success", deletedBook: deletedBook});
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    updateBookAuthor: updateBookAuthor,
    deleteBookByTitle: deleteBookByTitle,

};



