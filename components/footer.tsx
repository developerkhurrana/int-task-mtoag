import React from "react";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-neutral-300 pt-12 pb-6 px-4 border-t border-neutral-800 rounded-t-2xl shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pb-8">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row gap-6 text-sm font-semibold tracking-wide">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-orange-500 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-orange-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-500 transition-colors"
          >
            Contact
          </Link>
        </nav>
        {/* Contact Info & Socials */}
        <div className="flex flex-col md:items-end gap-3">
          <div className="text-sm">
            Email:{" "}
            <a
              href="mailto:thekshitijkhurrana@gmail.com"
              className="hover:text-orange-500 transition-colors underline underline-offset-2"
            >
              thekshitijkhurrana@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Line */}
      <div className="border-t border-neutral-800 pt-6 text-center text-xs text-neutral-500 flex flex-col items-center gap-2">
        <span className="flex items-center gap-1 justify-center">
          Made with{" "}
          <FaHeart
            className="text-orange-500 inline-block animate-pulse"
            aria-label="love"
          />{" "}
          by{" "}
          <a
            href="https://github.com/developerkhurrana"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 underline underline-offset-2 transition-colors"
          >
            Khurrana
          </a>
        </span>
      </div>
    </footer>
  );
}
