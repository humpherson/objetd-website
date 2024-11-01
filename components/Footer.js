// components/layout/Footer.js
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="p-8 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between mb-4 mt-4">
        <Link href="/" className="text-xl font-bold">
          Dan Humpherson
        </Link>
      </div>
      <div className="container mx-auto flex justify-between">
        <nav className="flex space-x-6 text-sm mb-8 sm:mb-12 pt-4">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/experience" className="hover:text-gray-500">
            Experience
          </Link>
          <Link href="/projects" className="hover:text-gray-500">
            Projects
          </Link>
          <Link href="/blog" className="hover:text-gray-500">
            Blog
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <a
            href="http://www.linkedin.com/in/dhumpherson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
            title="Dan Humpherson - LinkedIn Profile"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/humpherson"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-500"
            title="Dan Humpherson - GitHub"
          >
            <FaGithub size={20} />
          </a>
        </nav>
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
