import { useEffect, useState } from 'react'
import { Search, BookOpen, CheckCircle, Info, XCircle } from 'lucide-react'
import { toast } from 'sonner'
import Navbar from '../components/Navbar'
import { useBooks } from '../context/BookContext'

export default function StudentDashboard() {
  const { books, loading, fetchBooks, issueBook } = useBooks()
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetchBooks()
  }, [])

  const handleIssueBook = async (bookId) => {
    const result = await issueBook(bookId)
    if (result.success) {
      toast.success(result.message || 'Book issued successfully!')
    } else {
      toast.error(result.message || 'Failed to issue book')
    }
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
              Student Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Find and borrow your favorite books instantly.
            </p>
          </div>
          
          {/* Quick Stats or Info Badge (Optional but looks good) */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              {books.filter(b => b.available).length} Books Available
            </span>
          </div>
        </div>

        {/* Floating Search Bar */}
        <div className="sticky top-20 z-40 mb-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by title, author, or genre..."
              className="w-full pl-12 pr-4 py-4 border-none rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl shadow-gray-200/50 dark:shadow-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-64 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        ) : filteredBooks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-100 dark:border-gray-700">
            {searchTerm ? (
               <XCircle className="h-16 w-16 text-red-300 mb-4" />
            ) : (
               <BookOpen className="h-16 w-16 text-gray-300 mb-4" />
            )}
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              {searchTerm ? `No results found for "${searchTerm}"` : 'No books in library.'}
            </p>
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredBooks.map((book) => (
              <div
                key={book._id}
                className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl group-hover:scale-110 transition-transform">
                      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <Badge available={book.available} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 leading-snug line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 italic">
                      by {book.author}
                    </p>
                    <div className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700/50 rounded text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
                      ISBN: {book.isbn}
                    </div>
                  </div>

                  <button
                    onClick={() => handleIssueBook(book._id)}
                    disabled={!book.available}
                    className={`mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                      book.available
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                        : 'bg-gray-100 dark:bg-gray-700/50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {book.available ? (
                      <>
                        <CheckCircle className="h-4 w-4" />
                        Issue This Book
                      </>
                    ) : (
                      'Currently Issued'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function Badge({ available }) {
  return (
    <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg ${
      available 
        ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400' 
        : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-500'
    }`}>
      {available ? 'Ready' : 'Taken'}
    </span>
  )
}