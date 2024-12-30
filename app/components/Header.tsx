"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when resizing to larger screen
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="logo">
          <Image
            src="/logo.webp"
            alt="3rd Saturday Serve Logo"
            width={100}
            height={100}
            className="w-auto h-12 md:h-16"
          />
        </Link>
        <button
          className="md:hidden z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <nav
          className={`
            fixed md:relative top-0 right-0 bottom-0 
            w-64 md:w-auto
            bg-gray-800 md:bg-transparent
            transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:translate-x-0
            transition-transform duration-300 ease-in-out
            flex flex-col md:flex-row
            items-start md:items-center
            justify-center md:justify-end
            space-y-4 md:space-y-0 md:space-x-4
            p-8 md:p-0
          `}
        >
          <Link
            href="/"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeoEctmda3iRUD4eFkLAQFuyqS3xVp8Wvjbtjs6xRCZGUUDmQ/viewform?usp=pp_url"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="https://www.amazon.com/hz/wishlist/ls/3W0312UMZS82W?ref_=wl_share"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
