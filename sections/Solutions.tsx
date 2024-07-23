import { SolutionGrid } from "@/components/SolutionGrid";
import React from "react";

const Solutions = () => {
  return (
    <section className="bg-white px-5 py-10 md:px-32 md:py-20" id="solution">
      <div className="">
        <h1 className="text-center text-[20px] md:text-[40px] text-blue-950 font-semibold pt-4">
          Our Exceptional <span className="text-primary">Solutions</span>
        </h1>
        <p className=" text-textColor text-center text-[16.5px] pt-5">
          Innovative and tailored solutions designed to meet your unique <br />{" "}
          needs and drive your success.
        </p>
      </div>
      <div className="mt-16">
        <SolutionGrid />
      </div>
    </section>
  );
};

export default Solutions;
