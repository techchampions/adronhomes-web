// components/Footer.tsx

import FooterColumn1 from "@/components/FooterColumn1";
import FooterColumn4 from "@/components/FooterColumn4";
// import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { LuPhone } from "react-icons/lu";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", value: "https://www.facebook.com/adronhomes" },
    { name: "Instagram", value: "https://www.instagram.com/adronhomes" },
    { name: "X", value: "https://twitter.com/adronhomes" },
    { name: "Tiktok", value: "https://www.tiktok.com/@adronhomes" },
    { name: "Whatsapp", value: "+2348051011951" },
    {
      name: "Linkedin",
      value:
        "https://www.linkedin.com/company/adron-homes-and-properties-limited/",
    },
  ];
  const platformIcons: Record<string, JSX.Element> = {
    Facebook: <FaFacebook size={20} className="text-white" />,
    Instagram: <FaInstagram size={20} className="text-white" />,
    X: <FaXTwitter size={20} className="text-white" />,
    Tiktok: <FaTiktok size={20} className="text-white" />,
    Whatsapp: <FaWhatsapp size={20} className="text-white" />,
    Linkedin: <FaLinkedin size={20} className="text-white" />,
    Location: <FaMapMarkerAlt size={20} className="text-white" />,
    Email: <FaEnvelope size={20} className="text-white" />,
    "Phone Number": <FaPhone size={20} className="text-white" />,
  };
  const buildHref = (name: string, value: string) => {
    if (name === "Whatsapp") return `https://wa.me/${value.replace(/\D/g, "")}`;
    if (name === "Email") return `mailto:${value}`;
    if (name === "Phone Number") return `tel:${value}`;
    if (name === "Location" || name === "Address") return "#";
    return value.startsWith("http") ? value : `https://${value}`;
  };

  return (
    <footer className="bg-white text-black pt-10  relative bottom-0 left-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm px-4 md:px-10">
        {/* LOGO + ADDRESS */}
        {/* <div className="space-y-4">
          <Image
            src="/logo.svg" // Replace with your actual path
            alt="Adron Homes Logo"
            width={120}
            height={50}
            className="object-contain"
          />
          <p className="">
            75, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos
          </p>
          <div className="space-y-1 text-adron-black font-medium">
            <h4 className="font-bold text-black">FOR ENQUIRIES</h4>
            <div className="flex items-center gap-2">
              <LuPhone />
              <a href="tel:+2348051011951">+2348051011951</a>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/mail.svg" width={14} height={14} alt="mail" />
              <a href="mailto:telesales@adronhomes.com">telesales@adronhomes</a>
            </div>
          </div>
        </div> */}
        <FooterColumn1 />

        {/* PRODUCT */}
        <div className="grid grid-cols-2 gap-10 col-span-2">
          <div>
            <h4 className="font-bold mb-3 text-black">QUICK ACTIONS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="https://user.adronhomes.com/login">
                  Client Login
                </Link>
              </li>
              <li>
                <Link href="https://user.adronhomes.com/dashboard/new-property">
                  Buy Properties{" "}
                </Link>
              </li>
              <li>
                <Link href="/properties">Estates Locations </Link>
              </li>
              <li>
                <Link href="/home-listing">Home Listing </Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link href="/#testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold mb-3 text-black">COMPANY</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/client-partnership">Client Partnership</Link>
              </li>
              <li>
                <Link href="/about-us#leadership">Our Team</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* HELP & RESOURCES */}
        <div className="grid grid-cols-2 gap-10 col-span-2">
          <div>
            <h4 className="font-bold mb-3 text-black">HELP & RESOURCES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faqs">FAQs</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Privacy Policy</Link>
              </li>
              <li>Blog</li>
              <li>Corporate Social responsibilities</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          {/* <div className="hidden md:block">
          <h4 className="font-bold mb-3 text-black">JOIN OUR NEWSLETTER</h4>
          <p className="text-gray-400 mb-4">
            Be the first to access valuable insights, updates on our policies.
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="email address"
              className="p-2 rounded-full bg-white text-black w-full border border-gray-400 outline-none"
            />
            <button className="bg-gray-800 hover:bg-gray-700 transition text-white text-sm py-2 rounded-full">
              SUBSCRIBE
            </button>
          </div>
        </div> */}
          <FooterColumn4 />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center bg-adron-green text-xs text-white mt-10 md:mt-20 px-0 md:px-32 py-4 flex flex-col md:flex-row justify-between gap-4 w-full md:items-center">
        <p>© {new Date().getFullYear()} Adron Homes - All rights reserved</p>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={buildHref(link.name, link.value)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {platformIcons[link.name]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
