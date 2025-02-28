"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Github,
  XIcon,
} from "lucide-react";

export function Footer() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const togglePrivacyModal = () => setIsPrivacyModalOpen((prev) => !prev);
  const toggleTermsModal = () => setIsTermsModalOpen((prev) => !prev);

  return (
    <>
      {isTermsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-black p-6 rounded shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full">
            <button
              onClick={toggleTermsModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <XIcon className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">
              Terms & Conditions
            </h2>
            <h3 className="font-semibold mt-4 text-white">
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-300">
              By accessing and using Aswenna, you agree to be bound by these
              Terms and Conditions.
            </p>
            <h3 className="font-semibold mt-4 text-white">2. Use of Service</h3>
            <p className="text-gray-300">
              You agree to use our service only for lawful purposes and in
              accordance with these Terms.
            </p>
            <h3 className="font-semibold mt-4 text-white">3. User Accounts</h3>
            <p className="text-gray-300">
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities under your account.
            </p>
            <h3 className="font-semibold mt-4 text-white">
              4. Intellectual Property
            </h3>
            <p className="text-gray-300">
              All content, features, and functionality of Aswenna are owned by
              us and are protected by international copyright, trademark, and
              other intellectual property laws.
            </p>
            <h3 className="font-semibold mt-4 text-white">5. Privacy</h3>
            <p className="text-gray-300">
              Your use of Aswenna is also governed by our Privacy Policy. Please
              review our Privacy Policy.
            </p>

            <h3 className="font-semibold mt-4 text-white">6. Modifications</h3>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. Continued
              use of the service constitutes acceptance of modified terms.
            </p>

            <p className="text-gray-300 mt-4 italic">Last updated: 2/24/2025</p>
            <button
              onClick={toggleTermsModal}
              className="mt-4 bg-[#FF4A8D] text-white py-2 px-4 rounded hover:bg-[#FF6B9D] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-vlack "
      )} */}

      <footer className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Name */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="logo" width={60} height={60} />
                <span className="text-s font-bold"> Aswenna </span>
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4"> Quick Links </h3>
              <ul className="space-y-2">
                {["Features", "Contact Us", "About"].map((item) => (
                  <li
                    key={item}
                    className="text-s text-gray-400 hover:text-[#71f897] cursor-pointer"
                  >
                    <Link
                      href={
                        item === "Features"
                          ? "/#features"
                          : `/${item.toLowerCase().replace(/ /g, "-")}`
                      }
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4"> Support </h3>
              <ul className="space-y-2">
                <li className="text-gray-400 hover:text-[#71f897]">
                  <Link href="/contactUs#contact-form"> Contact Us </Link>
                </li>
                <li className="text-gray-400 hover:text-[#71f897] cursor-pointer">
                  <button onClick={toggleTermsModal}>
                    {" "}
                    Terms & Conditions{" "}
                  </button>
                </li>
                <li className="text-gray-400 hover:text-[#71f897] cursor-pointer">
                  <button onClick={togglePrivacyModal}> Privacy Policy </button>
                </li>
                <li className="text-gray-400 hover:text-[#71f897]">
                  <Link href="/#faq"> FAQ </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-semibold mb-4"> Follow Us </h3>
              <div className="flex gap-5">
                <Link
                  href="https://www.facebook.com/colossusai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@ColossusAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/colossusailk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/colossusai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/colossusailk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://discord.gg/JB473YPGUM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
                <Link
                  href="https://github.com/Colossus-AI-Learning-Guide-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#71f897]"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
