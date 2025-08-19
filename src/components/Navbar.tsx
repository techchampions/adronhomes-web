"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // or use any icon you prefer
import clsx from "clsx";
import SocialIcons from "./SocialIcons";
import { IoCaretDown } from "react-icons/io5";
import { useGetAllPropertyLocations, useHomepage } from "@/data/hooks";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data } = useGetAllPropertyLocations();
  const { data: homeData } = useHomepage();
  const social_links = homeData?.data.settings?.social_link || [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Dropdown menu links
  const locations = data?.locations;
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Properties",
      href: "/properties",
      dropdown: true,
      // dropdownLinks: dropdownLinks,
      dropdownLinks: locations?.map((location) => ({
        name: location.state_name,
        href: `/properties?location=${location.state_name}`,
        total_properties: location.total_property,
      })),
    },
    {
      name: "Estates",
      href: "/estates",
      dropdown: true,
      // dropdownLinks: dropdownLinks,
      dropdownLinks: locations?.map((location) => ({
        name: location.state_name,
        href: `/estates?state=${location.state_name}`,
        total_properties: location.total_property,
      })),
    },
    { name: "About us", href: "/about-us" },
    { name: "Virtual Tour", href: "/virtual-tour" },
    { name: "Career", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];
  const handlePropertiesClick = () => {
    if (pathname === "/properties") {
      // Send a custom event to tell PropertiesPage to reset
      window.dispatchEvent(new Event("reset-properties"));
    } else {
      router.push("/properties");
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
        <div className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            // src="/logo.png"
            alt="Adron Homes Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 text-sm relative">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={clsx("relative", link.dropdown && "group")}
            >
              <Link
                href={link.href}
                onClick={() => {
                  if (link.href === "/properties") {
                    handlePropertiesClick();
                  }
                }}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-adron-green font-semibold"
                    : "text-adron-black hover:text-adron-green"
                } ${link.dropdown ? "flex items-center" : ""}`}
              >
                {link.name}
                {link.dropdown && <IoCaretDown className="ml-1" />}
              </Link>

              {/* Dropdown on hover */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
                  <ul className="py-2">
                    {link.dropdownLinks?.map((drop) => (
                      <li key={drop.name}>
                        <Link
                          href={drop.href}
                          className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {drop.name}
                          <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
                            {" "}
                            {drop.total_properties}{" "}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <button className="text-gray-800 text-sm px-4 py-2">
            <Link
              href="https://adronhomesdashboard.netlify.app/"
              className="w-full"
            >
              Login
            </Link>
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
            <Link
              href="https://adronhomesdashboard.netlify.app/"
              className="w-full"
            >
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
          <SocialIcons
            social_link={social_links}
            className="block md:hidden my-8"
          />
          <div className="mt-10 flex gap-4 text-gray-600 text-xl">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-tiktok-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-black text-white py-2 rounded-full">
              <Link
                href="https://adronhomesdashboard.netlify.app/"
                className="w-full"
              >
                Sign up
              </Link>
            </button>
            <button className="w-full text-center text-gray-700">
              <Link
                href="https://adronhomesdashboard.netlify.app/"
                className="w-full "
              >
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
