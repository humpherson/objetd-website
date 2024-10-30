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
    <nav className="flex space-x-4 sm:space-x-8">
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
    </nav>
  );
}
