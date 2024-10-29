// components/Nav.js
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="flex space-x-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`${
            pathname === link.href ? "text-blue-500 font-bold" : "text-gray-500"
          } hover:text-blue-700`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
