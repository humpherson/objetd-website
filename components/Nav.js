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
    {
      href: "http://www.linkedin.com/in/dhumpherson",
      label: "LinkedIn",
      target: "_blank",
      icon: <FaLinkedin size={20} />,
    },
    {
      href: "https://github.com/your-github-username",
      label: "GitHub",
      target: "_blank",
      icon: <FaGithub size={20} />,
    },
  ];

  return (
    <nav className="flex space-x-4 sm:space-x-8">
      {navLinks.map((link, index) => (
        <div key={link.href} className="flex items-center">
          {index === navLinks.length - 2 && (
            <span className="mx-2 text-gray-500 pr-2 sm:pr-8">|</span>
          )}
          <Link
            href={link.href}
            target={link.target}
            className={`${
              pathname === link.href
                ? "text-teal-600 border-b border-b-2 border-teal-600 font-medium hover:text-teal-600"
                : "text-slate-500 border-b-0"
            } hover:text-teal-600 hover:border-b hover:border-b-2 hover:border-teal-600 flex items-center`}
          >
            {/* Display icon if available, otherwise show label */}
            {link.icon ? (
              <span className="mr-0">{link.icon}</span>
            ) : (
              <span>{link.label}</span>
            )}
          </Link>
        </div>
      ))}
    </nav>
  );
}
