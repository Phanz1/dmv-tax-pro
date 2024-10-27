"use client";

import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import Image from "next/image";
import SliderOne from "@/components/ui/slider";
import WhatWeDo from "./what-we-do";
import PhotoGridSection from "@/components/ui/PhotoGridSection";
import AlternatingSections from "@/components/ui/AlternatingSections";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import { useRef } from "react";

export default function Home() {
  // Creating references for scrolling to sections
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const whyChooseUsRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the "WhatWeDo" section
  function scrollToWhatWeDo() {
    if (whatWeDoRef.current) {
      whatWeDoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Function to scroll to the "Why Choose Us" section
  function scrollToWhyChooseUs() {
    if (whyChooseUsRef.current) {
      whyChooseUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-56">  
      {/* Navbar with scroll functions */}
      <Navbar
        scrollToWhatWeDo={scrollToWhatWeDo}
        scrollToWhyChooseUs={scrollToWhyChooseUs}
      />

      {/* Spotlight with margin for spacing */}
      <Spotlight 
        className="hidden md:flex md:left-80 md:top-80 mt-10"
        fill="white"
      />

      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2">
        {/* Header and description */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          DMV Tax Pro <br/> Expert Tax Guidance, Every Step of the Way
        </div>
        <p className="mt-4 text-xl font-normal text-neutral-300 max-w-lg text-center mx-auto px4">
          At DMV Tax Pro, we make taxes and accounting simple and stress-free for individuals and businesses in the Washington DC, Maryland, and Virginia areas. Whether you're navigating complex tax laws or managing your business finances, our experienced team is here to provide expert guidance, every step of the way.
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
          {/* WhatWeDo section with scroll ref */}
          <div ref={whatWeDoRef}>
            <WhatWeDo />
          </div>
          <br/>
          <div ref={whyChooseUsRef}>
          <PhotoGridSection />
          </div>
          <AlternatingSections />
          <LetsMakeThingsHappenSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
