const dotenv = require("dotenv");

const books = require("./data/books");
const connectDB = require("./config/db");
const Book = require("./model/bookSchema");

dotenv.config();

connectDB();

const importData = async() => {
    try {
      await Book.deleteMany({});
  
      await Book.insertMany(books);
  
      console.log("Data Import Success");
  
      process.exit();
    } catch (error) {
      console.error("Error with data import", error);
      process.exit(1);
    }
  };
  
importData();