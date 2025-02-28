"use client";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
// import { AnimatedBackground } from "../ui/animated-background";
// import { ChatBot } from "../ui/chatbot";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      <main className="min-h-screen pt-16">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
