"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon you prefer
import clsx from "clsx";
import SocialIcons from "./SocialIcons";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { name: "About us", href: "/about-us" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Career", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 md:px-0 md:max-w-[1125px] xl:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Adron Homes Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-adron-green font-semibold"
                    : "text-adron-black hover:text-adron-green"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="text-gray-800 text-sm px-4 py-2">
            <Link href="/login" className="w-full">
              Login
            </Link>
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
            <Link href="/signup" className="w-full">
              Sign up
            </Link>
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay + Mobile Menu Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
          "flex"
        )}
      >
        {/* Transparent dark overlay */}
        <div
          className="flex-1 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side drawer menu */}
        <div className="w-64 bg-white h-full p-6 shadow-lg">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base block ${
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

          {/* Socials and Buttons */}
          <SocialIcons social_link={[]} className="block md:hidden my-8" />
          <div className="mt-10 flex gap-4 text-gray-600 text-xl">
            {/* Replace with your actual social icons */}
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-tiktok-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-black text-white py-2 rounded-full">
              <Link href="/login" className="w-full">
                Sign up
              </Link>
            </button>
            <button className="w-full text-center text-gray-700">
              <Link href="/signup" className="w-full ">
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
