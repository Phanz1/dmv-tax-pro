"use client";

import { InlineWidget } from "react-calendly";


const Calendly =  () => {

    return ( 
    <div className="w-full ">
      <InlineWidget
      styles={{ height: "1000px" }}
      url="https://calendly.com/pivotaide-info/30min?back=1&month=2024-08" />
    </div> );
}
 
export default Calendly;