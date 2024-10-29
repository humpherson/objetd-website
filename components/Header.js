// components/Header.js
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="p-8 bg-gray-900 border-b border-red-500 text-gray-400">
      <div className="container mx-auto flex justify-between">
        <div className="container mx-auto flex justify-between pt-3 pb-0">
          <Link href="/" className="text-xl font-bold">
            Dan Humpherson
          </Link>
        </div>
        <nav className="flex space-x-6 text-sm mb-4 sm:mb-4 pt-4">
          <Link href="/work" className="hover:underline">
            Work
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/portfolio" className="hover:underline">
            Portfolio
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <a
            href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            title="LinkedIn - Dan Humpherson"
          >
            <FaLinkedin size={20} />
          </a>
        </nav>
      </div>
    </header>
  );
}
