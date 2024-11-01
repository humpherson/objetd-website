// components/layout/Footer.js
import Link from "next/link";
import Nav from "./Nav";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="pl-8 pr-8 pt-12 pb-12 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-start">
        {/* Brand/Name Link */}
        <div className="flex justify-start mb-6">
          <Link href="/" className="text-xl font-bold">
            <span>Dan Humpherson</span>
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-5xl mx-auto w-full mt-2 mb-6 justify-start">
        <Nav />
      </div>

      {/* Copyright Notice */}
      <div className="max-w-5xl mx-auto w-full flex justify-start pt-4">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Dan Humpherson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
