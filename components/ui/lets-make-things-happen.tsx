import React from "react";

import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section className="
     my-10 md:py-20  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-medium">
        Get Expert Help Today!
        </p>

        <p className="my-10 text-xl">
        Contact us at +1 (571) 470-3754 <br/> or Book a Consultation Online
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
          Book Now
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/img3.jpeg"
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;