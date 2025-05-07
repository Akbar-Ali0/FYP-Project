import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = ({ currentPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close mobile menu when clicking on a link
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Check if the link is active
    const isActive = (path) => {
        return currentPath === path ? 'text-green-500 font-bold' : 'hover:text-green-500';
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white bg-opacity-90 py-4'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center" onClick={closeMenu}>
                        <img src={logo} alt="PalmPay Logo" className="h-10 mr-3" />
                        <span className="text-xl font-bold text-green-600">PalmPay</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className={`${isActive('/')} transition-colors duration-200`}>
                            Home
                        </Link>
                        <Link to="/categories" className={`${isActive('/categories')} transition-colors duration-200`}>
                            Categories
                        </Link>
                        <Link to="/vendors" className={`${isActive('/vendors')} transition-colors duration-200`}>
                            Vendors
                        </Link>
                        <Link to="/about" className={`${isActive('/about')} transition-colors duration-200`}>
                            About
                        </Link>
                        <Link to="/help" className={`${isActive('/help')} transition-colors duration-200`}>
                            Help & Support
                        </Link>
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            to="/signin"
                            className="px-4 py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-50 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/signup"
                            className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-green-500 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white py-4 mt-2 rounded-lg shadow-lg">
                        <div className="flex flex-col space-y-4 px-4">
                            <Link to="/" className={`${isActive('/')} block py-2`} onClick={closeMenu}>
                                Home
                            </Link>
                            <Link to="/categories" className={`${isActive('/categories')} block py-2`} onClick={closeMenu}>
                                Categories
                            </Link>
                            <Link to="/vendors" className={`${isActive('/vendors')} block py-2`} onClick={closeMenu}>
                                Vendors
                            </Link>
                            <Link to="/about" className={`${isActive('/about')} block py-2`} onClick={closeMenu}>
                                About
                            </Link>
                            <Link to="/help" className={`${isActive('/help')} block py-2`} onClick={closeMenu}>
                                Help & Support
                            </Link>
                            <hr className="border-gray-200" />
                            <div className="flex flex-col space-y-2">
                                <Link
                                    to="/signin"
                                    className="w-full text-center py-2 rounded-lg border border-green-500 text-green-500 hover:bg-green-50 transition-colors duration-200"
                                    onClick={closeMenu}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="w-full text-center py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors duration-200"
                                    onClick={closeMenu}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;