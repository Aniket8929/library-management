import { createContext, useState } from 'react'
import api from '../api/api'

const BookContext = createContext(null)

export function BookProvider({ children }) {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchBooks = async () => {
    setLoading(true)
    try {
      const response = await api.get('/books')
      setBooks(response.data)
    } catch (error) {
      console.error('Failed to fetch books:', error)
    } finally {
      setLoading(false)
    }
  }

  const addBook = async (bookData) => {
    try {
      const response = await api.post('/books', bookData)
      setBooks((prev) => [...prev, response.data])
      return { success: true }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Failed to add book' }
    }
  }

  const updateBook = async (id, bookData) => {
    try {
      const response = await api.put(`/books/${id}`, bookData)
      setBooks((prev) => prev.map((book) => (book._id === id ? response.data : book)))
      return { success: true }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Failed to update book' }
    }
  }

  const deleteBook = async (id) => {
    try {
      await api.delete(`/books/${id}`)
      setBooks((prev) => prev.filter((book) => book._id !== id))
      return { success: true }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Failed to delete book' }
    }
  }

  const issueBook = async (id) => {
    try {
      const response = await api.post(`/books/issue/${id}`)
      setBooks((prev) => prev.map((book) => (book._id === id ? response.data.book : book)))
      return { success: true, message: response.data.message }
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Failed to issue book' }
    }
  }

  return (
    <BookContext.Provider value={{ books, loading, fetchBooks, addBook, updateBook, deleteBook, issueBook }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBooks = () => {
  const context = React.useContext(BookContext)
  if (!context) {
    throw new Error('useBooks must be used within BookProvider')
  }
  return context
}

import React from 'react'
