'use client'
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import DropDownMenu from "../drop-down-menu";

interface NavbarProps {
    scrollToWhatWeDo: () => void;
    scrollToWhyChooseUs: () => void;
  }
  

  const Navbar: React.FC<NavbarProps> = ({ 
    scrollToWhatWeDo, 
    scrollToWhyChooseUs 
  }) => {

    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible);
    }

    const closeDropDown = () => {
        setIsDropDownVisible(false);
    }

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
                <div className='hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50'>
                    <Link href="/" className='hover:text-gray-50'>Home</Link>
                    <Link href="/about" className='hover:text-gray-50'>About Us</Link>
                    <Link href="/services" className='hover:text-gray-50'>Tax Services</Link>
                    <div onClick={scrollToWhatWeDo} className='hover:text-gray-50 cursor-pointer'>What We Do</div>
                    <div onClick={scrollToWhyChooseUs} className='hover:text-gray-50 cursor-pointer'>Why Choose DMV Tax Pro?</div>
                </div>

                {/* Menu icon (visible on smaller screens) */}
                <div className="flex md:hidden">
                    {isDropDownVisible ? (
                        <div onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer">
                            <X />
                            <DropDownMenu onClose={closeDropDown} />
                        </div>
                    ) : (
                        <AlignJustify onClick={toggleDropDown} className="w-8 h-8 text-slate-300 cursor-pointer" />
                    )}
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
}

export default Navbar;
