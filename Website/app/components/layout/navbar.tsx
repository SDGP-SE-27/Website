"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex items-center justify-between h-20 backdrop-blur-sm w-full px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="logo" width={60} height={60} />
          <span className="text-s font-bold text-white">Aswenna</span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden px-4 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 px-4">
          {["Home", "Contact Us", "About"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/ /g, "-")}`
              }
            >
              <span
                onClick={() => setActiveTab(item)}
                className={`cursor-pointer px-4 py-2 text-white text-bold transition-all duration-200 rounded-lg hover:bg-white/10 ${
                  activeTab === item ? "bg-white/10" : ""
                }`}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-20 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm`}
        >
          <div className="flex flex-col items-center py-4">
            {["Home", "Contact Us", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                }
                className="w-full"
              >
                <span
                  onClick={() => {
                    setActiveTab(item);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full px-4 py-3 text-white text-bold transition-all duration-200 hover:bg-white/10 ${
                    activeTab === item ? "bg-white/10" : ""
                  }`}
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
