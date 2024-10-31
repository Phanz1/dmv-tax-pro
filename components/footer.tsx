"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col gap-y-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-8">
          {/* Logo and Contact */}
          <div className="flex flex-col gap-y-4">
            <Link href="/">
              {/* Updated Image component with proper configuration */}
              <div className="relative w-40 h-12">
                <Image
                  src="/logo/logo.png"
                  alt="DMV Tax Pro"
                  fill
                  sizes="160px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center gap-x-3">
              <FaEnvelope className="text-gray-600 text-xl" />
              <a
                href="mailto:info@dmvtaxpro.com"
                className="text-gray-700 text-lg hover:underline"
              >
                info@dmvtaxpro.com
              </a>
            </div>
            <div className="flex items-center gap-x-3">
              <FaPhoneAlt className="text-gray-600 text-xl" />
              <a
                href="tel:+15714703754"
                className="text-gray-700 text-lg hover:underline"
              >
                +1 (571) 470-3754
              </a>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center gap-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=61565011738631"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-gray-600 text-2xl hover:text-blue-600 transition-colors" />
            </Link>
            <Link
              href="https://x.com/i/professionals"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-gray-600 text-2xl hover:text-blue-400 transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/pivotaide/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-gray-600 text-2xl hover:text-blue-700 transition-colors" />
            </Link>
            <Link
              href="https://www.instagram.com/pivotaide/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-gray-600 text-2xl hover:text-blue-700 transition-colors" />
            </Link>
          </div>
        </div>
        {/* Addresses Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Maryland, USA */}
          <div className="flex items-start gap-x-3">
            <FaMapMarkerAlt className="text-gray-600 text-2xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Maryland, USA</h3>
              <p className="text-gray-600">
                6475 New Hampshire Ave, Ste 350, MD 20783
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} DMV Tax Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;