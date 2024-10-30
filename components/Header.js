// components/Header.js
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="p-8 shadow-md bg-white-900">
      <div className="container mx-auto flex justify-between items-center w-full max-w-5xl mx-auto">
        {/* Name and Image */}
        <div id="me" className="flex items-center space-x-2 sm:space-x-4">
          <Image
            src="/me.jpg" // Path to your picture in the public directory
            alt="Dan Humpherson"
            width={40} // Set width as desired
            height={40} // Set height as desired
            className="rounded-full" // Adds rounded style for a circular profile picture
          />
          <Link
            href="/"
            className="text-xl border-b border-b-2 border-white hover:border-teal-600 text-slate-600 font-medium hover:text-teal-600"
          >
            {/* Display full name on larger screens, short name on small screens */}
            <span className="hidden sm:inline">Dan Humpherson</span>
            <span className="sm:hidden">Dan H.</span>
          </Link>
        </div>

        {/* Navigation */}
        <Nav />
      </div>
    </header>
  );
}
