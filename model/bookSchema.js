const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    countInStock : {
        type : Number,
        required : true
    }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;