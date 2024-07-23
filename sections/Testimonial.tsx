import { MarqueeDemo } from "@/components/Marquee";
import React from "react";

const Testimonial = () => {
  return (
    <section className="px-4 md:px-20 py-10">
      <h1 className="text-blue-950 text-center text-[20px] md:text-[40px] font-bold">Hear from our <span className=" text-primary">clients</span></h1>
      <MarqueeDemo />
    </section>
  );
};

export default Testimonial;
