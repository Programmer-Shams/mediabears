import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-5 md:px-32 py-10 md:py-20 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-[60%]">
        <p className="text-primary border border-primary rounded-2xl w-fit px-5 py-1 shadow-md">
          Supercharge Your Instagram ⚡️
        </p>
        <h1 className="text-[28px] md:text-6xl mt-8 font-[600] leading-[3rem] md:leading-[5rem] w-full md:w-[90%] text-center md:text-left">
          Ignite Your Instagram Get Discovered by Millions
        </h1>
        <p className="mt-7 md:mt-10 text-textColor font-semibold w-full md:w-[80%]">
          Reach new heights with targeted growth strategies. Get real followers
          who love your content and skyrocket your Instagram presence.
        </p>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition duration-300 mt-10">
          Get started &rarr;
        </button>
      </div>
      <Image src="/Images/hero.svg" width={850} height={700} alt="Hero Image" className="mt-7"/>
    </section>
  );
};

export default Hero;
