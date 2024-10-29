// components/Header.js
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="p-8 bg-gray-900 border-b border-red-500 text-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        {/* Name and Image */}
        <div className="flex items-center space-x-4">
          <Image
            src="/me.jpg" // Path to your picture in the public directory
            alt="Dan Humpherson"
            width={40} // Set width as desired
            height={40} // Set height as desired
            className="rounded-full" // Adds rounded style for a circular profile picture
          />
          <Link href="/" className="text-xl font-bold">
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
