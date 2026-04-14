const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const adminOnly = require('../middleware/adminOnly');
const {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
  issueBook,
  searchBook
} = require('../controllers/bookController');

router.get('/', auth, getAllBooks);
router.post('/', auth, adminOnly, createBook);
router.put('/:id', auth, adminOnly, updateBook);
router.delete('/:id', auth, adminOnly, deleteBook);
router.post('/issue/:id', auth, issueBook);
router.get("/search",searchBook)

module.exports = router;
