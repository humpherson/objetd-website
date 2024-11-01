// components/Header.js
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="p-8 sm:p-8 shadow-md bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center w-full max-w-5xl">
        {/* Name and Image */}
        <div id="me" className="flex items-center space-x-4 mb-8 sm:mb-0">
          <Image
            src="/me.jpg" // Path to your picture in the public directory
            alt="Dan Humpherson"
            width={40} // Set width as desired
            height={40} // Set height as desired
            className="rounded-full" // Adds rounded style for a circular profile picture
          />
          <Link
            href="/"
            className="text-xl border-b-2 border-white hover:border-teal-600 text-slate-600 font-medium hover:text-teal-600"
          >
            {/* Display full name on larger screens, short name on small screens */}
            <span className="hidden md:inline">Dan Humpherson</span>
            <span className="md:hidden">Dan H.</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="w-full sm:w-auto">
          <Nav />
        </div>
      </div>
    </header>
  );
}
