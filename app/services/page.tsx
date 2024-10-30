"use client";
import ImageSlider from "@/components/ui/image-slider";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import Services from "../services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LetterPullup } from "@/components/magicui/letter-pullup";
import CardSection from "@/components/CardSection";
import Link from "next/link";
import Footer from "@/components/footer";
import { AlignJustify, X } from "react-feather";
import { useState } from "react";
import DropDownMenu from "@/components/drop-down-menu";

interface Section {
  header: string;
  description: string;
  imageUrl: string;
}

const sections: Section[] = [
  {
    header: "Corporate Tax Filing: ",
    description: "Accurate tax filing for LLCs, S-Corps, and C-Corps.",
    imageUrl: "/Images/q5.jpeg",
  },
  {
    header: "Small Business Tax Solutions: ",
    description: " Tailored tax strategies to help small businesses thrive.",
    imageUrl: "/Images/x4.jpeg",
  },
  {
    header: "Quarterly Tax Filings: ",
    description:
      "We help you stay compliant with regular filings for estimated taxes and other obligations.",
    imageUrl: "/Images/x5.jpeg",
  },
];

const slides = [
  {
    imageUrl: "/Images/q1.jpeg",
    dear: "At DMV Tax Pro",
    description:
      "we specialize in making taxes easy and stress-free. Whether you&apos;re a first-time filer or need expert assistance with a complex tax issue, we're here to help you every step of the way.",
  },
  {
    imageUrl: "/Images/q2.jpeg",
    dear: "Individual Tax Preparation & Filing",
    description: "Federal & State Tax Returns, Maximized Deductions, Tax Planning & Strategy",
  },
  {
    imageUrl: "/Images/q3.jpeg",
    dear: "Business Tax Services",
    description: "Corporate Tax Filing, Small Business Tax Solutions, Quarterly Tax Filings.",
  },
];

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

const ServicesComponent = () => {

  return (
    <div className="w-full md:items-center md:justify-center bg-black antialiased bg-grid-white/[0.02] relative overflow-hidden pt-56">
            <Navbar/>

      {/* Lamp Container */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Comprehensive Tax Services <br /> for Individuals and Businesses
        </motion.h1>
      </LampContainer>

      <ImageSlider slides={slides} interval={5000} />

      {/* Services Section */}
      <LetterPullup words={"Individual Tax Preparation & Filing:"} delay={0.05} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] relative"
        >
          <div className="max-w-xs relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Federal & State Tax Returns
            </h2>
            <p className="mt-4 text-left text-base text-neutral-200">
              We handle tax filings for residents of Washington DC, Maryland, and Virginia.
            </p>
          </div>
          <Image
            src="/Images/q4.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] -bottom-10 w-[50%] sm:w-[40%] lg:w-[35%] xl:w-[30%] object-contain rounded-2xl z-0"
          />
        </WobbleCard>

        {/* Additional Cards */}
        <WobbleCard containerClassName="col-span-1 min-h-[300px] relative">
          <div className="relative z-10">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Maximized Deductions:
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
              Our team ensures you take full advantage of every credit and deduction available to you.
            </p>
          </div>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] relative">
          <div className="max-w-sm relative z-10">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Tax Planning & Strategy:
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
              Proactively plan for the future by minimizing tax liabilities and maximizing tax savings.
            </p>
          </div>
          <Image
            src="/Images/pt6.jpeg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 w-[50%] sm:w-[40%] lg:w-[35%] xl:w-[30%] object-contain rounded-2xl z-0"
          />
        </WobbleCard>
      </div>

      {/* Accordion Section */}
      <LetterPullup words={"Specialized IRS Support:"} delay={0.05} />
      <section className="flex justify-center items-center mt-8">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">IRS Problem Resolution:</AccordionTrigger>
            <AccordionContent className="text-white">
              We work directly with the IRS on your behalf to resolve tax issues, back taxes, and penalties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">Bookkeeping & Payroll:</AccordionTrigger>
            <AccordionContent className="text-white">
              Comprehensive bookkeeping and payroll services to streamline your business operations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2">
        {/* Header and description */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        IRS Representation & Problem Resolution: <br/> Dont Let IRS Problems Stress You Out
        </div>
        <p className="mt-4 text-xl font-normal text-neutral-500 max-w-lg text-center mx-auto px4">
        At DMV Tax Pro, we specialize in helping clients resolve complex tax issues. From tax audits to payment plans, we take the stress out of dealing with the IRS by representing you every step of the way.
        </p>
        </div>

<CardSection />

<div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2">
        {/* Header and description */}
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
        Bookkeeping & Accounting <br/> Accurate & Efficient Bookkeeping for Your Business
        </div>
        <p className="mt-4 text-xl font-normal text-neutral-500 max-w-lg text-center mx-auto px4">
        Running a business means you&apos;ve got a lot on your plate, and keeping your books in order is a big part of that. At DMV Tax Pro, we offer professional bookkeeping and accounting services designed to keep your business finances organized and compliant.
        </p>
        </div>

    <Services/>

    <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Get IRS Help Today
        </p>

        <p className="my-10 text-xl">
        Don&apos;t wait until your tax problems get worse. <br/> Contact us at +1 (571) 470-3754 
        </p>

        <Link
          href="/book"
          className="py-3 
            px-10
        
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          schedule a consultation online.
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/img4.jpeg"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>

    <div className="text-white text-center ">

    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Build a Strong Financial Foundation for Your Business
    </h1>

    <p className="leading-7 [&:not(:first-child)]:mt-6 mt-4 txt-lg font-normal text-neutral-500 max-w-lg text-center mx-auto px4 text-xl">
    At DMV Tax Pro, we understand that running a successful business goes beyond day-to-day operations. Our business advisory services are designed to provide expert guidance and strategic planning to help you build a solid foundation and grow your business.
    </p>

    </div>

    <div className="text-4xl pb-5 md:txt-7xl text-center bp-clip-ext text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50 mt-20 text-white">
    Our Business Advisory Services Include:
        </div>

    
        <div className="my-6 w-full overflow-y-auto bg-gray-400 px-4"> {/* Added px-4 for padding */}
  <table className="w-full text-lg"> {/* Increased text size to large with text-lg */}
    <thead>
      <tr className="m-0 border-t p-0 even:bg-muted">
        <th className="border px-6 py-4 text-left font-bold text-xl"> {/* Increased padding and text size */}
          Business Advisory Service
        </th>
        <th className="border px-6 py-4 text-left font-bold text-xl"> {/* Increased padding and text size */}
          Description
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="m-0 border-t p-0 even:bg-muted">
        <td className="border px-6 py-4 text-left text-lg"> {/* Increased padding and text size */}
          Business Formation Consulting
        </td>
        <td className="border px-6 py-4 text-left text-lg"> {/* Increased padding and text size */}
          We help you choose the right structure for your business (LLC, S-Corp, C-Corp) and ensure you&apos;re set up for success.
        </td>
      </tr>
      <tr className="m-0 border-t p-0 even:bg-muted">
        <td className="border px-6 py-4 text-left text-lg">
          Financial Planning & Cash Flow Management
        </td>
        <td className="border px-6 py-4 text-left text-lg">
          Strategic financial planning and cash flow management services to optimize profitability and financial health.
        </td>
      </tr>
      <tr className="m-0 border-t p-0 even:bg-muted">
        <td className="border px-6 py-4 text-left text-lg">
          Comprehensive Business Plans
        </td>
        <td className="border px-6 py-4 text-left text-lg">
          We work with you to develop detailed business plans that attract investors and guide your business toward long-term growth.
        </td>
      </tr>
      <tr className="m-0 border-t p-0 even:bg-muted">
        <td className="border px-6 py-4 text-left text-lg">
          Risk Management
        </td>
        <td className="border px-6 py-4 text-left text-lg">
          Assess potential risks and ensure you&apos;re prepared for unexpected financial challenges.
        </td>
      </tr>
    </tbody>
  </table>
</div>

      <Footer />
    </div>
  );
};

export default ServicesComponent;
