import Image from "next/image";
import React from "react";

const Insight = () => {
  return (
    <section className="px-5 md:px-24 py-10">
      <div>
        <div
          className="relative w-full h-[25rem] md:h-[30rem] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url('/Images/gradient.png')` }}
        >
          {/* <div className="absolute"></div> */}
          <div className="relative flex flex-col items-center justify-center w-full h-full text-center text-blue-950">
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-[2.4rem] md:leading-[5rem]">
              The ideal solution for <br /> Your Product
            </h1>
            <p className="text-[16px] text-textColor mb-7">
              By choosing MediaBear to find the ideal subscribers, you are sure
              to be able <br /> to offer your services/products to the right people.
            </p>
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition duration-300">
              Get started &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
