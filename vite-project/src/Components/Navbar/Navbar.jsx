import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-transparent">
      <ul className="flex justify-center space-x-8 py-4 text-white">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#education" className="hover:underline">Education</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
