import React, { useState } from 'react';
import logo from '../assets/logo.jpg'


// make responsive
// set the size of the navbar that is fixed.
// now make the container of the image resize according to the div box.
// 	make it disappear if the vw is small ( use just text? )

// use color pallete (see website)

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    
    return (
        <div className="bg-logoGreen p-2 shadow-md font-tinos">
            <div className="max-w-screen-xl mx-auto flex justify-around items-center">
                <div className="text-white text-2xl font-bold inline-block">
                    <img src={logo} alt="PalmPay .inc" className="h-18 object-contain content-center"/>
                </div>

                                            {/* Have to make changes to this later */}
                {/* Hamburger Icon (Visible on small screens) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                                            {/* make separate file for the common inline css */}
                <ul className={`list-none md:flex space-x-6 text-white ${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                    <li className="hover:bg-green-700 px-3 py-2 rounded-md">
                        <a href="">Home</a>
                    </li>
                    <li className="hover:bg-green-700 px-3 py-2 rounded-md">
                        <a href="">Categories</a>
                    </li>
                    <li className="hover:bg-green-700 px-3 py-2 rounded-md">
                        <a href="">About</a>
                    </li>
                    <li className="hover:bg-green-700 px-3 py-2 rounded-md">
                        <a href="">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;