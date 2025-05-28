import React, { useState } from 'react'
import { Hand, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link to="/signin" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors">
              Sign In
            </Link>
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
            <Link to="/signin" className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors w-full text-center">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
