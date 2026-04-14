import { BookOpen, LogOut, Sun, Moon, User, LayoutDashboard, Library, Menu, X } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout } = useAuth()
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'))
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  const handleLogout = () => {
    logout()
    window.location.href = '/login'
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Book<span className="text-blue-600">Flow</span>
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink icon={<Library className="w-4 h-4"/>} label="Explore" active />
              {user?.role === 'admin' && (
                <NavLink icon={<LayoutDashboard className="w-4 h-4"/>} label="Management" />
              )}
            </div>
          </div>

          {/* Right Side: Actions (Desktop) */}
          <div className="flex items-center gap-2">
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-all active:scale-95"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Desktop User Info & Logout */}
            <div className="hidden md:flex items-center gap-3 pl-2 border-l border-gray-200 dark:border-gray-700 ml-2">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  {user?.name || 'User'}
                </p>
                <p className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400">
                  {user?.role}
                </p>
              </div>
              
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 flex items-center justify-center text-white">
                <User className="h-5 w-5" />
              </div>

              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-4 space-y-4 shadow-xl">
          <div className="flex items-center gap-3 p-2 border-b border-gray-100 dark:border-gray-800 pb-4">
            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <User className="h-6 w-6" />
            </div>
            <div>
              <p className="font-bold text-gray-900 dark:text-white">{user?.name}</p>
              <p className="text-xs text-blue-600 font-medium uppercase">{user?.role}</p>
            </div>
          </div>
          
          <div className="space-y-1">
            <MobileNavLink icon={<Library className="w-5 h-5"/>} label="Explore" />
            {user?.role === 'admin' && (
              <MobileNavLink icon={<LayoutDashboard className="w-5 h-5"/>} label="Management" />
            )}
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full p-3 text-red-600 font-medium hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ icon, label, active = false }) {
  return (
    <button className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
      active 
        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' 
        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
    }`}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

function MobileNavLink({ icon, label }) {
  return (
    <button className="flex items-center gap-3 w-full p-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all">
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  )
}