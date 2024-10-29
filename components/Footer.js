// components/layout/Footer.js
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="p-8 bg-gray-900 text-gray-400">
      <div className="container mx-auto flex justify-between mb-4 mt-4">
        <Link href="/" className="text-xl font-bold">
          Dan Humpherson
        </Link>
      </div>
      <div className="container mx-auto flex justify-between">
        <nav className="flex space-x-6 text-sm mb-4 sm:mb-4 pt-4">
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white"
            title="LinkedIn - Dan Humpherson"
          >
            <FaLinkedin size={20} />
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/experience" className="hover:text-white">
            Experience
          </Link>
          <Link href="/portfolio" className="hover:text-white">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
        </nav>
        <a
          href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile link
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-white"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <div className="container mx-auto flex justify-between pt-4 pb-4">
        {/* Copyright Notice */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Dan Humpherson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
