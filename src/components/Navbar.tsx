// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react"; // or use any icon you prefer
// import clsx from "clsx";
// import SocialIcons from "./SocialIcons";
// import { IoCaretDown } from "react-icons/io5";
// import {
//   useGetAllPropertyCategory,
//   useGetAllPropertyLocations,
//   useHomepage,
// } from "@/data/hooks";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { data } = useGetAllPropertyLocations();
//   const { data: categoryData } = useGetAllPropertyCategory();

//   const categories = categoryData?.category ?? [];

//   const categoriesNav = categories.map((item) => ({
//     name: item.category_name,
//     href: `/${item.category_name}`,
//     dropdown: item.properties.length > 0,
//     dropdownLinks: item.properties.map((dropitem) => ({
//       name: dropitem.name,
//       href: `/${item.category_name}/${dropitem.name}`,
//       total_properties: dropitem.total_amount,
//     })),
//   }));
//   const { data: homeData } = useHomepage();
//   const social_links = homeData?.data.settings?.social_link || [];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   // Dropdown menu links
//   const locations = data?.locations;
//   const navLinks = [
//     { name: "Home", href: "/" },
//     {
//       name: "Properties",
//       href: "/properties",
//       dropdown: true,
//       // dropdownLinks: dropdownLinks,
//       dropdownLinks: locations?.map((location) => ({
//         name: location.state_name,
//         href: `/properties?location=${location.state_name}`,
//         total_properties: location.total_property,
//       })),
//     },
//     ...categoriesNav,
//     {
//       name: "Estates",
//       href: "/estates",
//       dropdown: true,
//       // dropdownLinks: dropdownLinks,
//       dropdownLinks: locations?.map((location) => ({
//         name: location.state_name,
//         href: `/estates?state=${location.state_name}`,
//         total_properties: location.total_property,
//       })),
//     },
//     { name: "About us", href: "/about-us" },
//     { name: "Virtual Tour", href: "/virtual-tour" },
//     { name: "Career", href: "/careers" },
//     { name: "Contact Us", href: "/contact" },
//   ];
//   const handlePropertiesClick = () => {
//     if (pathname === "/properties") {
//       // Send a custom event to tell PropertiesPage to reset
//       window.dispatchEvent(new Event("reset-properties"));
//     } else {
//       router.push("/properties");
//     }
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
//         scrolled ? "bg-white shadow" : "bg-transparent"
//       }`}
//     >
//       <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/logo.svg"
//             // src="/logo.png"
//             alt="Adron Homes Logo"
//             width={160}
//             height={60}
//             className="object-contain"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-10 text-sm relative">
//           {navLinks.map((link) => (
//             <li
//               key={link.href}
//               className={clsx("relative", link.dropdown && "group")}
//             >
//               <Link
//                 href={link.href}
//                 onClick={() => {
//                   if (link.href === "/properties") {
//                     handlePropertiesClick();
//                   }
//                 }}
//                 className={`transition-colors duration-300 ${
//                   pathname === link.href
//                     ? "text-adron-green font-semibold"
//                     : "text-adron-black hover:text-adron-green"
//                 } ${link.dropdown ? "flex items-center" : ""}`}
//               >
//                 {link.name}
//                 {link.dropdown && <IoCaretDown className="ml-1" />}
//               </Link>

//               {/* Dropdown on hover */}
//               {link.dropdown && (
//                 <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
//                   <ul className="py-2">
//                     {link.dropdownLinks?.map((drop) => (
//                       <li key={drop.name}>
//                         <Link
//                           href={drop.href}
//                           className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                         >
//                           {drop.name}
//                           <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
//                             {" "}
//                             {drop.total_properties}{" "}
//                           </span>
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-2">
//           <button className="text-gray-800 text-sm px-4 py-2">
//             <Link href="https://user.adronhomes.com/login" className="w-full">
//               Login
//             </Link>
//           </button>
//           <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
//             <Link href="https://user.adronhomes.com/signup" className="w-full">
//               Sign up
//             </Link>
//           </button>
//         </div>

//         {/* Hamburger Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMobileMenuOpen(true)}>
//             <Menu size={28} />
//           </button>
//         </div>
//       </nav>

//       {/* Overlay + Mobile Menu Drawer */}
//       <div
//         className={clsx(
//           "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
//           "flex"
//         )}
//       >
//         {/* Transparent dark overlay */}
//         <div
//           className="flex-1 bg-black/50"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* Side drawer menu */}
//         <div className="w-64 bg-white h-full p-6 shadow-lg">
//           <div className="flex justify-end mb-6">
//             <button onClick={() => setIsMobileMenuOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           <ul className="flex flex-col space-y-5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <Link
//                   href={link.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className={`text-base block ${
//                     pathname === link.href
//                       ? "text-adron-green font-semibold"
//                       : "text-gray-700 hover:text-adron-green"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Socials and Buttons */}
//           <SocialIcons
//             social_link={social_links}
//             className="block md:hidden my-8"
//           />
//           <div className="mt-10 flex gap-4 text-gray-600 text-xl">
//             <i className="ri-facebook-fill"></i>
//             <i className="ri-twitter-fill"></i>
//             <i className="ri-tiktok-fill"></i>
//             <i className="ri-instagram-fill"></i>
//           </div>

//           <div className="mt-8 space-y-3">
//             <button className="w-full bg-black text-white py-2 rounded-full">
//               <Link
//                 href="https://user.adronhomes.com/signup"
//                 className="w-full"
//               >
//                 Sign up
//               </Link>
//             </button>
//             <button className="w-full text-center text-gray-700">
//               <Link
//                 href="https://user.adronhomes.com/login"
//                 className="w-full "
//               >
//                 Login
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react"; // or use any icon you prefer
// import clsx from "clsx";
// import SocialIcons from "./SocialIcons";
// import { IoCaretDown, IoCaretForward } from "react-icons/io5";
// import {
//   useGetAllPropertyCategory,
//   useGetAllPropertyLocations,
//   useHomepage,
// } from "@/data/hooks";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { data } = useGetAllPropertyLocations();
//   const { data: categoryData } = useGetAllPropertyCategory();
//   const { data: homeData } = useHomepage();

//   // const categoriesNav = categories.map((item) => ({
//   //   name: item.category_name,
//   //   href: `/${item.category_name.toLowerCase().replace(/\s+/g, "-")}`,
//   //   dropdown: item.properties && item.properties.length > 0,
//   //   dropdownLinks:
//   //     item.properties?.map((dropitem) => ({
//   //       name: dropitem.name,
//   //       href: `/${item.category_name
//   //         .toLowerCase()
//   //         .replace(/\s+/g, "-")}/${dropitem.name
//   //         .toLowerCase()
//   //         .replace(/\s+/g, "-")}`,
//   //       total_properties: dropitem.total_amount,
//   //     })) || [],
//   // }));

//   const social_links = homeData?.data.settings?.social_link || [];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Dropdown menu links
//   const categories = categoryData?.adron_category;
//   const locations = data?.locations;
//   const navLinks = [
//     { name: "Home", href: "/" },
//     {
//       name: "Properties",
//       href: "/properties",
//       dropdown: true,
//       dropdownLinks: locations?.map((location) => ({
//         name: location.state_name,
//         href: `/properties?location=${location.state_name}`,
//         total_properties: location.total_property,
//         dropdown: false,
//         dropdownLinks: [],
//       })),
//     },
//     {
//       name: "Homes Listing",
//       href: "#",
//       dropdown: true,
//       dropdownLinks: categories?.map((category) => ({
//         name: category.category_name,
//         href: category.category_name,
//         dropdown: true,
//         dropdownLinks: category.properties.map((item) => ({
//           name: item.name,
//           href: item.name,
//           total_properties: 4,
//           dropdown: false,
//         })),
//         total_properties: 0,
//       })),
//     },
//     // {
//     //   name: "Estates",
//     //   href: "/estates",
//     //   dropdown: true,
//     //   dropdownLinks: locations?.map((location) => ({
//     //     name: location.state_name,
//     //     href: `/estates?state=${location.state_name}`,
//     //     total_properties: location.total_property,
//     //   })),
//     // },
//     { name: "About us", href: "/about-us" },
//     { name: "Virtual Tour", href: "/virtual-tour" },
//     { name: "Career", href: "/careers" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const handlePropertiesClick = () => {
//     if (pathname === "/properties") {
//       // Send a custom event to tell PropertiesPage to reset
//       window.dispatchEvent(new Event("reset-properties"));
//     } else {
//       router.push("/properties");
//     }
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
//         scrolled ? "bg-white shadow" : "bg-transparent"
//       }`}
//     >
//       <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/logo.svg"
//             alt="Adron Homes Logo"
//             width={160}
//             height={60}
//             className="object-contain"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-10 text-sm relative">
//           {navLinks.map((link) => (
//             <li
//               key={link.href}
//               className={clsx("relative", link.dropdown && "group")}
//             >
//               <Link
//                 href={link.href}
//                 onClick={() => {
//                   if (link.href === "/properties") {
//                     handlePropertiesClick();
//                   }
//                 }}
//                 className={`transition-colors duration-300 ${
//                   pathname === link.href
//                     ? "text-adron-green font-semibold"
//                     : "text-adron-black hover:text-adron-green"
//                 } ${link.dropdown ? "flex items-center" : ""}`}
//               >
//                 {link.name}
//                 {link.dropdown && <IoCaretDown className="ml-1" />}
//               </Link>

//               {/* Dropdown on hover */}
//               {link.dropdown &&
//                 link.dropdownLinks &&
//                 link.dropdownLinks.length > 0 && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-auto">
//                     <ul className="py-2">
//                       {link.dropdownLinks.map((drop) => (
//                         <li
//                           key={drop.name}
//                           className={clsx(
//                             "relative",
//                             drop.dropdown && "group1"
//                           )}
//                         >
//                           <Link
//                             href={drop.href}
//                             className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             {drop.name}
//                             {drop.dropdown ? (
//                               <IoCaretForward />
//                             ) : (
//                               <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
//                                 {drop.total_properties}
//                               </span>
//                             )}
//                           </Link>

//                           {drop.dropdown &&
//                             drop.dropdownLinks &&
//                             drop.dropdownLinks.length > 0 && (
//                               <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group1-hover:opacity-100 group1-hover:visible transition-all duration-300 z-50 pointer-events-auto">
//                                 <ul className="py-2">
//                                   {drop.dropdownLinks.map((drop) => (
//                                     <li
//                                       key={drop.name}
//                                       className={clsx(
//                                         "relative",
//                                         drop.dropdown && "group2"
//                                       )}
//                                     >
//                                       <Link
//                                         href={drop.href}
//                                         className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       >
//                                         {drop.name}
//                                         {drop.dropdown ? (
//                                           <IoCaretForward />
//                                         ) : (
//                                           <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
//                                             {drop.total_properties}
//                                           </span>
//                                         )}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-2">
//           <button className="text-gray-800 text-sm px-4 py-2">
//             <Link href="https://user.adronhomes.com/login" className="w-full">
//               Login
//             </Link>
//           </button>
//           <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
//             <Link href="https://user.adronhomes.com/signup" className="w-full">
//               Sign up
//             </Link>
//           </button>
//         </div>

//         {/* Hamburger Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMobileMenuOpen(true)}>
//             <Menu size={28} />
//           </button>
//         </div>
//       </nav>

//       {/* Overlay + Mobile Menu Drawer */}
//       <div
//         className={clsx(
//           "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
//           "flex"
//         )}
//       >
//         {/* Transparent dark overlay */}
//         <div
//           className="flex-1 bg-black/50"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* Side drawer menu */}
//         <div className="w-64 bg-white h-full p-6 shadow-lg overflow-y-auto">
//           <div className="flex justify-end mb-6">
//             <button onClick={() => setIsMobileMenuOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           <ul className="flex flex-col space-y-5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <div>
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`text-base block ${
//                       pathname === link.href
//                         ? "text-adron-green font-semibold"
//                         : "text-gray-700 hover:text-adron-green"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>

//                   {/* Mobile dropdown for categories */}
//                   {link.dropdown &&
//                     link.dropdownLinks &&
//                     link.dropdownLinks.length > 0 && (
//                       <ul className="pl-4 mt-2 space-y-2">
//                         {link.dropdownLinks.map((drop) => (
//                           <li key={drop.name}>
//                             <Link
//                               href={drop.href}
//                               onClick={() => setIsMobileMenuOpen(false)}
//                               className="text-sm text-gray-600 hover:text-adron-green"
//                             >
//                               {drop.name}
//                               <span className="bg-adron-green text-white rounded-full px-2 text-[10px] ml-2">
//                                 {drop.total_properties}
//                               </span>
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Socials and Buttons */}
//           <SocialIcons
//             social_link={social_links}
//             className="block md:hidden my-8"
//           />
//           <div className="mt-10 flex gap-4 text-gray-600 text-xl">
//             <i className="ri-facebook-fill"></i>
//             <i className="ri-twitter-fill"></i>
//             <i className="ri-tiktok-fill"></i>
//             <i className="ri-instagram-fill"></i>
//           </div>

//           <div className="mt-8 space-y-3">
//             <button className="w-full bg-black text-white py-2 rounded-full">
//               <Link
//                 href="https://user.adronhomes.com/signup"
//                 className="w-full"
//               >
//                 Sign up
//               </Link>
//             </button>
//             <button className="w-full text-center text-gray-700">
//               <Link
//                 href="https://user.adronhomes.com/login"
//                 className="w-full "
//               >
//                 Login
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { ChevronDown, LucideChevronDown, Menu, X } from "lucide-react";
// import clsx from "clsx";
// import SocialIcons from "./SocialIcons";
// import { IoCaretDown, IoCaretForward } from "react-icons/io5";
// import {
//   useGetAllPropertyCategory,
//   useGetAllPropertyLocations,
//   useHomepage,
// } from "@/data/hooks";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { data } = useGetAllPropertyLocations();
//   const { data: categoryData } = useGetAllPropertyCategory();
//   const { data: homeData } = useHomepage();

//   const social_links = homeData?.data.settings?.social_link || [];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Dropdown menu links
//   const categories = categoryData?.adron_category;
//   const locations = data?.locations;
//   const navLinks = [
//     { name: "Home", href: "/" },
//     {
//       name: "Properties",
//       href: "/properties",
//       dropdown: true,
//       dropdownLinks: locations?.map((location) => ({
//         name: location.state_name,
//         href: `/properties?location=${location.state_name}`,
//         total_properties: location.total_property,
//         dropdown: false,
//         dropdownLinks: [],
//       })),
//     },
//     {
//       name: "Homes Listing",
//       href: "/#",
//       dropdown: true,
//       dropdownLinks: categories?.map((category) => ({
//         name: category.category_name,
//         href: "/#",
//         dropdown: true,
//         dropdownLinks: category.properties.map((item) => ({
//           name: item.name,
//           href: item.name,
//           total_properties: null,
//           dropdown: false,
//         })),
//         total_properties: 0,
//       })),
//     },
//     { name: "About us", href: "/about-us" },
//     { name: "Virtual Tour", href: "/virtual-tour" },
//     { name: "Career", href: "/careers" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   const handlePropertiesClick = () => {
//     if (pathname === "/properties") {
//       // Send a custom event to tell PropertiesPage to reset
//       window.dispatchEvent(new Event("reset-properties"));
//     } else {
//       router.push("/properties");
//     }
//   };

//   return (
//     <header
//       className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
//         scrolled ? "bg-white shadow" : "bg-transparent"
//       }`}
//     >
//       <nav className="w-full px-4 md:px-0 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
//         <div className="flex items-center space-x-2">
//           <Image
//             src="/logo.svg"
//             alt="Adron Homes Logo"
//             width={160}
//             height={60}
//             className="object-contain"
//           />
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-10 text-sm relative">
//           {navLinks.map((link) => (
//             <li
//               key={link.href}
//               className={clsx("relative", link.dropdown && "group")}
//             >
//               <Link
//                 href={link.href}
//                 onClick={() => {
//                   if (link.href === "/properties") {
//                     handlePropertiesClick();
//                   }
//                 }}
//                 className={`transition-colors duration-300 ${
//                   pathname === link.href
//                     ? "text-adron-green font-semibold"
//                     : "text-adron-black hover:text-adron-green"
//                 } ${link.dropdown ? "flex items-center" : ""}`}
//               >
//                 {link.name}
//                 {link.dropdown && <IoCaretDown className="ml-1" />}
//               </Link>

//               {/* First level dropdown */}
//               {link.dropdown &&
//                 link.dropdownLinks &&
//                 link.dropdownLinks.length > 0 && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                     <ul className="py-2">
//                       {link.dropdownLinks.map((drop) => (
//                         <li
//                           key={drop.name}
//                           className={clsx(
//                             "relative",
//                             drop.dropdown && "nested-group"
//                           )}
//                         >
//                           <Link
//                             href={drop.href}
//                             className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                           >
//                             {drop.name}
//                             {drop.dropdown ? (
//                               <IoCaretForward className="ml-1" />
//                             ) : (
//                               <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
//                                 {drop.total_properties}
//                               </span>
//                             )}
//                           </Link>

//                           {/* Second level dropdown - only shows when hovering over immediate parent */}
//                           {drop.dropdown &&
//                             drop.dropdownLinks &&
//                             drop.dropdownLinks.length > 0 && (
//                               <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md opacity-0 invisible nested-group:hover:opacity-100 nested-group:hover:visible transition-all duration-300 z-50">
//                                 <ul className="py-2">
//                                   {drop.dropdownLinks.map((subDrop) => (
//                                     <li key={subDrop.name} className="">
//                                       <Link
//                                         href={subDrop.href}
//                                         className="flex min-w-0 truncate justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                       >
//                                         {subDrop.name}
//                                         {subDrop.dropdown ? (
//                                           <IoCaretForward />
//                                         ) : (
//                                           <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
//                                             {subDrop.total_properties}
//                                           </span>
//                                         )}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             )}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex space-x-2">
//           <button className="text-gray-800 text-sm px-4 py-2">
//             <Link href="https://user.adronhomes.com/login" className="w-full">
//               Login
//             </Link>
//           </button>
//           <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
//             <Link href="https://user.adronhomes.com/signup" className="w-full">
//               Sign up
//             </Link>
//           </button>
//         </div>

//         {/* Hamburger Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMobileMenuOpen(true)}>
//             <Menu size={28} />
//           </button>
//         </div>
//       </nav>

//       {/* Overlay + Mobile Menu Drawer */}
//       <div
//         className={clsx(
//           "fixed inset-0 z-[60] transition-transform duration-300 md:hidden",
//           isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
//           "flex"
//         )}
//       >
//         {/* Transparent dark overlay */}
//         <div
//           className="flex-1 bg-black/50"
//           onClick={() => setIsMobileMenuOpen(false)}
//         />

//         {/* Side drawer menu */}
//         <div className="w-64 bg-white h-full p-6 shadow-lg overflow-y-auto">
//           <div className="flex justify-end mb-6">
//             <button onClick={() => setIsMobileMenuOpen(false)}>
//               <X size={24} />
//             </button>
//           </div>

//           <ul className="flex flex-col space-y-5">
//             {navLinks.map((link) => (
//               <li key={link.href}>
//                 <div>
//                   <Link
//                     href={link.href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className={`text-base flex items-center justify-between ${
//                       pathname === link.href
//                         ? "text-adron-green font-semibold"
//                         : "text-gray-700 hover:text-adron-green"
//                     }`}
//                   >
//                     {link.name}
//                     {link.dropdown && <ChevronDown size={15} />}
//                   </Link>

//                   {/* Mobile dropdown for categories */}
//                   {link.dropdown &&
//                     link.dropdownLinks &&
//                     link.dropdownLinks.length > 0 && (
//                       <ul className="pl-4 mt-2 space-y-2">
//                         {link.dropdownLinks.map((drop) => (
//                           <li key={drop.name}>
//                             <Link
//                               href={drop.href}
//                               onClick={() => setIsMobileMenuOpen(false)}
//                               className="text-sm flex items-center justify-between text-gray-600 hover:text-adron-green"
//                             >
//                               {drop.name}
//                               {drop.dropdown ? (
//                                 <LucideChevronDown size={15} />
//                               ) : (
//                                 <span className="bg-adron-green text-white rounded-full px-2 text-[8px] ml-1">
//                                   {drop.total_properties}
//                                 </span>
//                               )}
//                             </Link>

//                             {/* Second level mobile dropdown */}
//                             {drop.dropdown &&
//                               drop.dropdownLinks &&
//                               drop.dropdownLinks.length > 0 && (
//                                 <ul className="pl-4 mt-1 space-y-1">
//                                   {drop.dropdownLinks.map((subDrop) => (
//                                     <li key={subDrop.name}>
//                                       <Link
//                                         href={subDrop.href}
//                                         onClick={() =>
//                                           setIsMobileMenuOpen(false)
//                                         }
//                                         className="text-xs text-gray-500 hover:text-adron-green"
//                                       >
//                                         {subDrop.name}
//                                         {/* {subDrop.dropdown ? (
//                                           <ChevronDown />
//                                         ) : (
//                                           <span className="bg-adron-green text-white rounded-full px-2 text-[8px] ml-1">
//                                             {subDrop.total_properties}
//                                           </span>
//                                         )} */}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Socials and Buttons */}
//           <SocialIcons
//             social_link={social_links}
//             className="block md:hidden my-8"
//           />
//           <div className="mt-10 flex gap-4 text-gray-600 text-xl">
//             <i className="ri-facebook-fill"></i>
//             <i className="ri-twitter-fill"></i>
//             <i className="ri-tiktok-fill"></i>
//             <i className="ri-instagram-fill"></i>
//           </div>

//           <div className="mt-8 space-y-3">
//             <button className="w-full bg-black text-white py-2 rounded-full">
//               <Link
//                 href="https://user.adronhomes.com/signup"
//                 className="w-full"
//               >
//                 Sign up
//               </Link>
//             </button>
//             <button className="w-full text-center text-gray-700">
//               <Link
//                 href="https://user.adronhomes.com/login"
//                 className="w-full "
//               >
//                 Login
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         /* Style for nested dropdowns */
//         .nested-group:hover > div {
//           opacity: 1 !important;
//           visibility: visible !important;
//         }
//       `}</style>
//     </header>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import clsx from "clsx";
import SocialIcons from "./SocialIcons";
import { IoCaretDown, IoCaretForward } from "react-icons/io5";
import {
  useGetAllPropertyCategory,
  useGetAllPropertyLocations,
  useHomepage,
} from "@/data/hooks";

// Define types for our dropdown state
type ExpandedDropdowns = {
  [key: string]: boolean;
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState<ExpandedDropdowns>(
    {}
  );
  const { data } = useGetAllPropertyLocations();
  const { data: categoryData } = useGetAllPropertyCategory();
  const { data: homeData } = useHomepage();

  const social_links = homeData?.data.settings?.social_link || [];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown expansion
  const toggleDropdown = (index: number) => {
    setExpandedDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Toggle nested dropdown expansion
  const toggleNestedDropdown = (parentIndex: number, childIndex: number) => {
    const key = `${parentIndex}-${childIndex}`;
    setExpandedDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Dropdown menu links
  const categories = categoryData?.adron_category;
  const locations = data?.locations;
  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Properties",
      href: "/properties",
      dropdown: true,
      dropdownLinks: locations?.map((location) => ({
        name: location.state_name,
        href: `/properties?location=${location.state_name}`,
        total_properties: location.total_property,
        dropdown: false,
        dropdownLinks: [],
      })),
    },
    {
      name: "Homes Listing",
      href: "/#",
      dropdown: true,
      dropdownLinks: categories?.map((category) => ({
        name: category.category_name,
        href: "/#",
        dropdown: true,
        dropdownLinks: category.properties.map((item) => ({
          name: item.name,
          href: `/properties/${item.name}`,
          total_properties: null,
          dropdown: false,
        })),
        total_properties: 0,
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
      <nav className="w-full px-4 md:max-w-[1240px] mx-auto flex justify-between items-center pt-4 pb-1">
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
        <ul className="hidden lg:flex space-x-10 text-sm relative">
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

              {/* First level dropdown */}
              {link.dropdown &&
                link.dropdownLinks &&
                link.dropdownLinks.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <ul className="py-2">
                      {link.dropdownLinks.map((drop) => (
                        <li
                          key={drop.name}
                          className={clsx(
                            "relative",
                            drop.dropdown && "nested-group"
                          )}
                        >
                          <Link
                            href={drop.href}
                            className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {drop.name}
                            {drop.dropdown ? (
                              <IoCaretForward className="ml-1" />
                            ) : (
                              <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
                                {drop.total_properties}
                              </span>
                            )}
                          </Link>

                          {/* Second level dropdown - only shows when hovering over immediate parent */}
                          {drop.dropdown &&
                            drop.dropdownLinks &&
                            drop.dropdownLinks.length > 0 && (
                              <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded-md opacity-0 invisible nested-group:hover:opacity-100 nested-group:hover:visible transition-all duration-300 z-50">
                                <ul className="py-2">
                                  {drop.dropdownLinks.map((subDrop) => (
                                    <li key={subDrop.name} className="">
                                      <Link
                                        href={subDrop.href}
                                        className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                        {subDrop.name}
                                        {subDrop.dropdown ? (
                                          <IoCaretForward />
                                        ) : (
                                          <span className="bg-adron-green text-white rounded-full px-2 text-[10px]">
                                            {subDrop.total_properties}
                                          </span>
                                        )}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-2">
          <button className="text-gray-800 text-sm px-4 py-2">
            <Link href="https://user.adronhomes.com/login" className="w-full">
              Login
            </Link>
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-full">
            <Link href="https://user.adronhomes.com/signup" className="w-full">
              Sign up
            </Link>
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Overlay + Mobile Menu Drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-[60] transition-transform duration-300 lg:hidden",
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
        <div className="w-64 bg-white h-full p-6 shadow-lg overflow-y-auto">
          <div className="flex justify-end mb-6">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <ul className="flex flex-col space-y-5">
            {navLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <div>
                  {link.dropdown ? (
                    // Dropdown items are clickable to expand/collapse
                    <div>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className={`text-base flex items-center justify-between w-full ${
                          pathname === link.href
                            ? "text-adron-green font-semibold"
                            : "text-gray-700"
                        }`}
                      >
                        {link.name}
                        {expandedDropdowns[index] ? (
                          <ChevronUp size={15} />
                        ) : (
                          <ChevronDown size={15} />
                        )}
                      </button>

                      {/* Mobile dropdown for categories - only show when expanded */}
                      {expandedDropdowns[index] &&
                        link.dropdownLinks &&
                        link.dropdownLinks.length > 0 && (
                          <ul className="pl-4 mt-2 space-y-2">
                            {link.dropdownLinks.map((drop, dropIndex) => (
                              <li key={`${drop.name}-${dropIndex}`}>
                                {drop.dropdown ? (
                                  // Nested dropdown items
                                  <div>
                                    <button
                                      onClick={() =>
                                        toggleNestedDropdown(index, dropIndex)
                                      }
                                      className="text-sm flex items-center justify-between w-full text-gray-600"
                                    >
                                      {drop.name}
                                      {expandedDropdowns[
                                        `${index}-${dropIndex}`
                                      ] ? (
                                        <ChevronUp size={12} />
                                      ) : (
                                        <ChevronDown size={12} />
                                      )}
                                    </button>

                                    {/* Second level mobile dropdown - only show when expanded */}
                                    {expandedDropdowns[
                                      `${index}-${dropIndex}`
                                    ] &&
                                      drop.dropdownLinks &&
                                      drop.dropdownLinks.length > 0 && (
                                        <ul className="pl-4 mt-1 space-y-1">
                                          {drop.dropdownLinks.map((subDrop) => (
                                            <li key={subDrop.name}>
                                              <Link
                                                href={subDrop.href}
                                                onClick={() =>
                                                  setIsMobileMenuOpen(false)
                                                }
                                                className="text-xs block py-1 text-gray-500 hover:text-adron-green"
                                              >
                                                {subDrop.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      )}
                                  </div>
                                ) : (
                                  // Regular link items
                                  <Link
                                    href={drop.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-sm block py-1 text-gray-600 hover:text-adron-green"
                                  >
                                    {drop.name}
                                    {drop.total_properties && (
                                      <span className="bg-adron-green text-white rounded-full px-2 text-[8px] ml-1">
                                        {drop.total_properties}
                                      </span>
                                    )}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ) : (
                    // Regular non-dropdown links
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
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Socials and Buttons */}
          <div className="px-4">
            <SocialIcons
              social_link={social_links}
              className="block md:hidden my-8"
            />
          </div>
          <div className="mt-10 flex gap-4 text-gray-600 text-xl">
            <i className="ri-facebook-fill"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-tiktok-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full bg-black text-white py-2 rounded-full">
              <Link
                href="https://user.adronhomes.com/signup"
                className="w-full"
              >
                Sign up
              </Link>
            </button>
            <button className="w-full text-center text-gray-700">
              <Link
                href="https://user.adronhomes.com/login"
                className="w-full "
              >
                Login
              </Link>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Style for nested dropdowns */
        .nested-group:hover > div {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </header>
  );
}
