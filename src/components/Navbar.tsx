"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="w-full flex justify-between items-center py-4 px-2 md:px-8">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Adron Homes Logo"
            width={200}
            height={70}
            className="object-contain"
          />
        </div>

        <ul className="hidden md:flex space-x-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-adron-green font-semibold"
                    : "text-gray-700 hover:text-adron-green"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-x-2">
          <button className="text-gray-800 text-sm px-4 py-2">Login</button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}
