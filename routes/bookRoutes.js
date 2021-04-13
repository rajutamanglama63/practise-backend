const express = require("express");
const router = express.Router();

const Book = require("../model/bookSchema");

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});

        res.json(books);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg : "server error!"});
    }
});


router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        res.json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({msg : "server error!"});
    }
});

module.exports = router;