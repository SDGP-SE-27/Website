"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("/");
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={60} height={60} />
            <span className="text-s font-bold">Aswenna</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Contact Us", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : '/${item.toLowerCase().replace(/ /g, "-")}'
                }
              >
                <span
                  onClick={() => setActiveTab(item)}
                  className="cursor-pointer px-4 py-2 text-white transition
                ${ activeTab === tab.href ? 'bg--500' : 'bg-gray-700 hover:bg-gray-600'
              }"
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
