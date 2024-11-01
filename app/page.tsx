"use client";

import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import WhatWeDo from "./what-we-do";
import PhotoGridSection from "@/components/ui/PhotoGridSection";
import AlternatingSections from "@/components/ui/AlternatingSections";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import Image from "next/image";
import { useState } from "react";
import DropDownMenu from "@/components/drop-down-menu";
import { X, AlignJustify } from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
  {
    quote: "At DMV Tax Pro, they made tax season stress-free. Their knowledge saved me money, and I feel confident knowing they have my back for IRS audits.",
    name: "Sarah M",
    title: "",
  }, 
  {
    quote: "The team at DMV Tax Pro has been instrumental in helping my business thrive. Their bookkeeping services are top-notch, and I always feel supported when I have questions about taxes or finances.",
    name: "John D.",
    title: "",
  },
];

const Navbar: React.FC = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => setIsDropDownVisible(!isDropDownVisible);
  const closeDropDown = () => setIsDropDownVisible(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-black/[0.96] antialiased bg-grid-white/[0.02]">
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
            <Link
              href="/book"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content with Black Background and Top Padding to Avoid Overlap with Navbar */}
      <div className="pt-[80px] bg-black text-white"> {/* Set background color here */}
        {/* Spotlight with margin for spacing */}
        <Spotlight className="hidden md:flex md:left-80 md:top-80 mt-10" fill="white" />

        <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2">
          {/* Header and description */}
          <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
            DMV Tax Pro <br /> Expert Tax Guidance, Every Step of the Way
          </div>
          <p className="mt-4 text-xl font-normal text-neutral-300 max-w-lg text-center mx-auto px4">
            At DMV Tax Pro, we make taxes and accounting simple and stress-free for individuals and businesses in the Washington DC, Maryland, and Virginia areas. Whether you&apos;re navigating complex tax laws or managing your business finances, our experienced team is here to provide expert guidance, every step of the way.
          </p>

          {/* Call to Action button */}
          <Link
            href="/book"
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white"
          >
            Book a Call
          </Link>

          {/* Main content sections */}
          <div className="w-full pt-20">
            <SliderOne />
            <WhatWeDo />
            <PhotoGridSection />
            <AlternatingSections />
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-black dark:bg-black items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={testimonials} direction="left" speed="normal" />
                </div>
            <LetsMakeThingsHappenSection />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
