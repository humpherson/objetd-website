// components/Nav.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home", target: "" },
    { href: "/experience", label: "Experience", target: "" },
    { href: "/projects", label: "Projects", target: "" },
    { href: "/blog", label: "Blog", target: "" },
  ];

  const socialLinks = [
    {
      href: "http://www.linkedin.com/in/dhumpherson",
      label: "LinkedIn",
      target: "_blank",
      icon: <FaLinkedin size={20} />,
    },
    {
      href: "https://github.com/humpherson",
      label: "GitHub",
      target: "_blank",
      icon: <FaGithub size={20} />,
    },
  ];

  return (
    <nav className="flex flex-col sm:flex-row sm:justify-start space-y-6 sm:space-y-0 sm:space-x-8">
      {/* Page Links */}
      <div className="flex space-x-4 sm:space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-teal-600 border-b border-b-2 border-teal-600 font-medium hover:text-teal-600"
                : "text-slate-500 border-b-0"
            } hover:text-teal-600 hover:border-b hover:border-b-2 hover:border-teal-600`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <span className="text-slate-500 hidden sm:inline">|</span>
      {/* Social Links */}
      <div className="flex space-x-4 sm:space-x-8">
        {socialLinks.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.target}
            className="text-slate-500 hover:text-teal-600"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
