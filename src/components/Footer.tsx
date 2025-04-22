// components/Footer.tsx

import Image from "next/image";
import { LuPhone } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 px-4 md:px-20 relative bottom-0 left-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">
        {/* LOGO + ADDRESS */}
        <div className="space-y-4">
          <Image
            src="/logo.svg" // Replace with your actual path
            alt="Adron Homes Logo"
            width={120}
            height={50}
            className="object-contain"
          />
          <p className="text-gray-400">
            75, Adron Court, Adeyemo Akapo, Omole Phase 1, Lagos
          </p>
          <div className="space-y-1 text-[#636363] font-medium">
            <h4 className="font-bold text-black">FOR ENQUIRIES</h4>
            <div className="flex items-center gap-2">
              <LuPhone />
              <a href="tel:+2348051011951">+2348051011951</a>
            </div>
            <div className="flex items-center gap-2">
              {/* <IoMail className="text-adron-green h-5 w-5" /> */}
              <Image src="/mail.svg" width={14} height={14} alt="mail" />
              <a href="mailto:telesales@adronhomes.com">telesales@adronhomes</a>
            </div>
          </div>
        </div>

        {/* PRODUCT */}
        <div className="grid grid-cols-2 gap-10 col-span-2">
          <div>
            <h4 className="font-bold mb-3 text-black">PRODUCT</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Corporate Social Responsibility</li>
              <li>Estates</li>
              <li>Home Listings</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-bold mb-3 text-black">COMPANY</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Client Partnership</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        {/* HELP & RESOURCES */}
        <div>
          <h4 className="font-bold mb-3 text-black">HELP & RESOURCES</h4>
          <ul className="space-y-2 text-gray-400">
            <li>FAQ</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="hidden md:block">
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
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-xs text-gray-500 mt-10 md:mt-32">
        © {new Date().getFullYear()} Adron Homes - All rights reserved
      </div>
    </footer>
  );
}
