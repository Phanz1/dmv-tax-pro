"use client";

import { useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import Image from "next/image";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Footer from "@/components/footer";
import HeroSection from "@/components/ui/HeroSectionProps";
import RepeatedSection from "@/components/ui/our-approach";
import NumberTicker from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import DropDownMenu from "@/components/drop-down-menu";
import { X, AlignJustify } from "lucide-react";



const sectionsData = [
    {
      title: 'Client-Focused',
      description: 'We listen to your needs and tailor our services to ensure the best outcomes for your financial situation',
      imageUrl: '/Images/gt2.jpeg',
    },
    {
      title: 'Proactive Solutions',
      description: 'Beyond tax filing, we offer strategic advice to reduce liabilities and help your business grow.',
      imageUrl: '/Images/gt5.jpeg',
    },
    {
      title: 'Ethical & Transparent',
      description: 'No hidden fees, just honest pricing and ethical practices.',
      imageUrl: '/Images/x1.jpeg',
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

const AboutUs = () => {
    return (
        <div className="w-full md:items-center md:justify-center bg-blue/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-56">
            <Navbar/>

            {/* Spotlight with margin for spacing */}
            <Spotlight className="hidden md:flex md:left-80 md:top-80 mt-10" fill="white" />

            <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-32 px-2 ">
                <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-blue-400 bg-opacity-50">
                    About DMV Tax Pro 
                </div>
                <HeroSection
                    backgroundImageUrl="/Images/12.png"
                    headerText="Expert Tax Guidance, Every Step of the Way"
                    descriptionText="At DMV Tax Pro, we are more than just accountants and tax preparers. We are your financial partners, helping you navigate tax laws, manage business finances, and achieve financial success."
                    additionalText="With years of experience, our certified team of tax professionals understands the unique financial landscape of the DMV area."
                />

                {/* Section with trusted clients and projects completed */}
                <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
                    <div className="md:w-2/5">
                        <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                            Trusted by fast moving brands worldwide
                        </h1>
                        <div className="flex my-6 gap-x-5 w-full">
                            <div>
                                <h1 className="text-blue-500 text-3xl md:text-5xl">
                                    <NumberTicker value={50} /> +
                                    <p className="text-gray-500 text-sm md:text-md">Happy Clients</p>
                                </h1>
                            </div>
                            <div className="w-px bg-gray-300 self-stretch"></div>
                            <div>
                                <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap">
                                    <NumberTicker value={100} /> +
                                    <p className="text-gray-500 text-sm md:text-md">Projects Completed</p>
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Infinite Moving Logos Section */}
                    <section className="overflow-hidden mt-10 md:w-4/5">
                        <InfiniteMovingLogos 
                            speed="slow"
                            direction="left"
                            items={[
                                { logo: "/Images/l_1.png", name: "Logo" },
                                { logo: "/Images/l_2.png", name: "Logo" },
                                { logo: "/Images/l_3.png", name: "Logo" },
                                { logo: "/Images/l_4.png", name: "Logo" },
                                { logo: "/Images/l_5.png", name: "Logo" },
                                { logo: "/Images/l_6.png", name: "Logo" },
                                { logo: "/Images/l_7.png", name: "Logo" },
                                { logo: "/Images/l_8.png", name: "Logo" },
                                { logo: "/Images/l_10.png", name: "Logo" },
                            ]}
                        />
                    </section>
                </div>

                <RepeatedSection headerText="Our Approach" sections={sectionsData} />

                

                <LetsMakeThingsHappenSection />
                <Footer />
            </div>
        </div>
    );
};

export default AboutUs;
