"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="text-s font-bold">Aswenna</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Features", "Contact Us", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Features"
                    ? "/#features"
                    : '/${item.toLowerCase().replace(/ /g, "-")}'
                }
                className="relative text-white"
              >
                {item}
                <span />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
