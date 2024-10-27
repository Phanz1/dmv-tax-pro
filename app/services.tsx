'use client'

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto y-20">
        <div className="text-4xl pb-5 md:txt-7xl text-center bp-clip-ext text-transparent bg-gradient-to-b from-blue-500 to-neutral-50 bg-opacity-50 mt-20 text-white">
        Our Bookkeeping & Accounting Services Include
        </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto">

        </p>

        <CardHoverEffectDemo/>

    </div> );
}
 
export default Services;