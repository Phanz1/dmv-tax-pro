"use client";

import { PiCheckCircle } from "react-icons/pi";
import { AlignJustify, X } from "react-feather";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import Calendly from "./calendly";
import DropDownMenu from "@/components/drop-down-menu";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  return (
      <div className="fixed top-0 left-0 right-0 bg-black bg-opacity-75 shadow-lg z-50">
          <div className="p-6 md:p-10 flex items-center justify-between">
              {/* Logo */}
              <div>
                  <Link href="/">
                      <Image
                          src="/Logo/logo.png"
                          alt="Logo"
                          width={400}
                          height={400}
                          className="w-40 h-40 md:w-32 md:h-32"
                      />
                  </Link>
              </div>

              {/* Main navigation links (hidden on smaller screens) */}
              <div className="hidden md:flex space-x-10 items-center text-slate-300 text-center">
                  <Link href="/" className="hover:text-gray-50 text-xl">Home</Link>
                  <Link href="/about" className="hover:text-gray-50 text-xl">About Us</Link>
                  <Link href="/services" className="hover:text-gray-50 text-xl">Tax Services</Link>
                  </div>

              {/* Menu icon (visible on smaller screens) */}
              <div className="flex md:hidden">
                  {isDropDownVisible ? (
                      <X onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
                  ) : (
                      <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
                  )}
                  {isDropDownVisible && <DropDownMenu onClose={closeDropDown} />}
              </div>

              {/* Book a Call button */}
              <div className="hidden md:flex">
                  <Link href="/book" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      Book a Call
                  </Link>
              </div>
          </div>
      </div>
  );
};

const Book = () => {
  return (
    <div 
      className="w-full md:items-center md:justify-center relative overflow-hidden pt-56 bg-blue-300"
      style={{
        backgroundImage: "url('/Images/16.png')", // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navbar/>

      {/* Main content with adjusted text colors for better contrast */}
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10 text-black">Let&apos;s Meet</h1>
          <p className="text-lg text-black py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[{
              title: "Comprehensive Tax Services  ",
              description: "Individual Tax Preparation & Filing, Business Tax Services, Quarterly Tax Filings.",
            },
            {
              title: "Specialized IRS Support",
              description: "IRS Problem Resolution, Audit Representation.",
            },
            {
              title: "Technical Support",
              description: "Get technical support for your website or application.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.3 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-black">{item.title}</h3>
                <div className="text-black">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          <Calendly />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;