import React, { useState, useEffect, useRef } from 'react'
import { Hand, Menu, X, User, LogOut, Settings } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, getUser, logout } from '../../../backend/utils/auth'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()
  const userMenuRef = useRef(null)

  // Check authentication status on component mount and when auth state might change
  useEffect(() => {
    const checkAuthStatus = () => {
      const authStatus = isAuthenticated()
      setIsLoggedIn(authStatus)
      
      if (authStatus) {
        const userData = getUser()
        setUser(userData)
      } else {
        setUser(null)
      }
    }

    checkAuthStatus()
    
    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => {
      checkAuthStatus()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setIsLoggedIn(false)
    setUser(null)
    setIsUserMenuOpen(false)
    navigate('/')
  }

  const UserMenu = () => (
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium">{user?.name || 'User'}</span>
      </button>

      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          <Link
            to="/dashboard"
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsUserMenuOpen(false)}
          >
            <Settings className="w-4 h-4 mr-2" />
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  )

  const MobileUserSection = () => (
    <div className="border-t border-gray-200 pt-4 mt-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium text-gray-900">{user?.name || 'User'}</span>
      </div>
      <Link
        to="/dashboard"
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors w-full py-2"
        onClick={() => setIsOpen(false)}
      >
        <Settings className="w-4 h-4 mr-2" />
        Dashboard
      </Link>
      <button
        onClick={() => {
          handleLogout()
          setIsOpen(false)
        }}
        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors w-full py-2"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </button>
    </div>
  )

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Hand className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PalmPay</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact Sales</a>
            
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <Link to="/signin" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="flex flex-col items-start space-y-4 px-4 pb-4 bg-white shadow-md rounded-md">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors w-full">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors w-full">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors w-full">Pricing</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors w-full">Contact Sales</a>
            
            {isLoggedIn ? (
              <MobileUserSection />
            ) : (
              <Link to="/signin" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors w-full text-center">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar