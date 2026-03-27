import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleClose = () => setOpen(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="ITFC Logo"
            className="h-10 md:h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-white items-center gap-6 bg-white/10 backdrop-blur-md px-6 py-2 rounded-2xl border border-white/20">

          <Link to="/" className="hover:text-red-400">Home</Link>

          {/* Dropdown */}
          {/* <div className="relative group">
            <button className="hover:text-red-400">Products ▾</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded shadow p-2">
              <p className="px-3 py-1 hover:bg-gray-100">Item 1</p>
              <p className="px-3 py-1 hover:bg-gray-100">Item 2</p>
            </div>
          </div> */}

          <Link to="/products" className="hover:text-red-400">Products</Link>

          <Link to="/services" className="hover:text-red-400">Services</Link>
          <Link to="/about" className="hover:text-red-400">About us</Link>
          <Link to="/contact" className="hover:text-red-400">Contact</Link>

          <HashLink smooth to="/#quote" className="hover:text-red-400">
            <button className="bg-white px-4 py-2 rounded-lg text-red-500">
              Request a Quote
            </button>
          </HashLink>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleClose}
        ></div>
      )}

      {/* 🔥 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <img src={logo} className="h-8" />
          <button onClick={handleClose}>✕</button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-4 overflow-y-auto">
          <Link onClick={handleClose} to="/" className="block hover:text-red-400">Home</Link>
          <Link onClick={handleClose} to="/products" className="block hover:text-red-400">Products</Link>
          <Link onClick={handleClose} to="/services" className="block hover:text-red-400">Services</Link>
          <Link onClick={handleClose} to="/about" className="block hover:text-red-400">About</Link>
          <Link onClick={handleClose} to="/contact" className="block hover:text-red-400">Contact</Link>

          <Link to="/#quote" className="hover:text-red-400">
            <button
              onClick={handleClose}
              className="bg-white text-red-500 px-4 py-2 rounded-lg w-full mt-4"
            >
              Request a Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;