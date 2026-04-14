import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, BookOpen, Hash, User as UserIcon } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '../components/Navbar'
import BookModal from '../components/BookModal'
import { useBooks } from '../context/BookContext'

export default function AdminDashboard() {
  const { books, loading, fetchBooks, addBook, updateBook, deleteBook } = useBooks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleAddBook = async (bookData) => {
    const result = await addBook(bookData)
    if (result.success) {
      toast.success('Book added successfully')
      setIsModalOpen(false)
    } else {
      toast.error(result?.message)
    }
  }

  const handleUpdateBook = async (bookData) => {
    const result = await updateBook(selectedBook._id, bookData)
    if (result.success) {
      toast.success('Book updated successfully')
      setIsModalOpen(false)
    } else {
      toast.error(result.message)
    }
  }

  const handleDeleteBook = async (id) => {
    if (!confirm('Are you sure you want to delete this book?')) return
    const result = await deleteBook(id)
    if (result.success) toast.success('Book deleted successfully')
  }

  const openEditModal = (book) => {
    setSelectedBook(book)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Manage library inventory & status</p>
          </div>
          <button
            onClick={() => { setSelectedBook(null); setIsModalOpen(true); }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
          >
            <Plus className="h-5 w-5" />
            Add New Book
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-500 animate-pulse">Fetching books...</p>
          </div>
        ) : books.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 dark:border-gray-700">
            <BookOpen className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-xl font-medium text-gray-500">Your library is empty</p>
            <p className="text-gray-400 text-sm mt-1">Click 'Add New Book' to get started</p>
          </div>
        ) : (
          <>
            {/* Desktop View (Table) - Hidden on Mobile */}
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Book Details</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">ISBN</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {books.map((book) => (
                    <tr key={book._id} className="hover:bg-blue-50/30 dark:hover:bg-blue-900/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{book.title}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{book.author}</div>
                      </td>
                      <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">{book.isbn}</td>
                      <td className="px-6 py-4">
                        <StatusBadge available={book.available} />
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <ActionButton icon={<Edit2 size={16}/>} color="blue" onClick={() => openEditModal(book)} />
                          <ActionButton icon={<Trash2 size={16}/>} color="red" onClick={() => handleDeleteBook(book._id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View (Cards) - Hidden on Desktop */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {books.map((book) => (
                <div key={book._id} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 dark:text-white leading-tight">{book.title}</h3>
                      <div className="flex items-center gap-1.5 mt-1 text-sm text-gray-500">
                        <UserIcon size={14} /> <span>{book.author}</span>
                      </div>
                    </div>
                    <StatusBadge available={book.available} />
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-50 dark:bg-gray-900/50 p-2 rounded-lg mb-4">
                    <Hash size={12} /> {book.isbn}
                  </div>

                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button 
                      onClick={() => openEditModal(book)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                    >
                      <Edit2 size={14} /> Edit
                    </button>
                    <button 
                      onClick={() => handleDeleteBook(book._id)}
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/20 rounded-xl"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <BookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        book={selectedBook}
        onSubmit={selectedBook ? handleUpdateBook : handleAddBook}
      />
    </div>
  )
}

// Reusable Components to keep code clean
function StatusBadge({ available }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
      available 
        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${available ? 'bg-green-500' : 'bg-amber-500'}`}></span>
      {available ? 'Available' : 'Issued'}
    </span>
  )
}

function ActionButton({ icon, color, onClick }) {
  const colors = {
    blue: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30',
    red: 'text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30'
  }
  return (
    <button onClick={onClick} className={`p-2.5 rounded-xl transition-all active:scale-90 ${colors[color]}`}>
      {icon}
    </button>
  )
}