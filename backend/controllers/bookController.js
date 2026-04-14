const Book = require('../models/Book');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, isbn } = req.body;
    if (!title || !author || !isbn) {
      return res.status(400).json({ message: 'Title, author and ISBN are required.' });
    }

    const book = new Book({ title, author, isbn });
    await book.save();

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, isbn, available } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    if (title) book.title = title;
    if (author) book.author = author;
    if (isbn) book.isbn = isbn;
    if (available !== undefined) book.available = available;

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    res.json({ message: 'Book deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

const issueBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found.' });
    }

    if (!book.available) {
      return res.status(400).json({ message: 'Book is already issued.' });
    }

    book.available = false;
    book.issuedBy = req.user.id;
    await book.save();

    res.json({ message: 'Book issued successfully.', book });
  } catch (error) {
    res.status(500).json({ message: 'Server error.', error: error.message });
  }
};

const searchBook = async (req, res) => {
  try {
    const { q } = req.query; // Search term (e.g., ?q=harry)

    if (!q) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Using Regex for partial and case-insensitive search
    const searchResult = await Book.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { author: { $regex: q, $options: 'i' } }
      ]
    });

    res.status(200).json(searchResult);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  issueBook,
  searchBook
};
