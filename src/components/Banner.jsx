import React from "react";

const Banner = () => {
  return (
    <section
      className="bg-banner bg-cover bg-no-repeat bg-center w-full h-[850px] sm:h-[900px] md:h-[1000px] lg:h-[1100px] overflow-hidden relative"
      aria-label="Delicious Cafe Banner"
    >
      <div className="container mx-auto h-full flex flex-col pt-[140px] sm:pt-[160px] md:pt-[200px] lg:pt-[180px] px-4">

        {/* Small Title */}
        <p className="font-inter text-yelo text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-2 md:text-left lg:text-left text-center">
          Delicious Cafe
        </p>

        {/* main heading */}
        <h1 className="text-white font-sansita text-[40px] sm:text-[50px] md:text-[70px] lg:text-[85px] max-w-[600px] leading-tight mb-6 md:text-left lg:text-left text-center">
          Sweet Treats, Perfect Eats
        </h1>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col gap-4 md:mx-0 mx-auto font-poppins">
          <button
            aria-label="Shop Now"
            className="bg-[#933C24] text-white font-semibold md:px-10 px-[10px] py-[10px] md:py-4 rounded-md hover:bg-[#7c2f1a] duration-300 cursor-pointer w-full md:w-fit"
          >
            Shop Now
          </button>

          <button
            aria-label="Learn More About Delicious Cafe"
            className="bg-transparent border border-[#E9BD8C] hover:bg-[#E9BD8C] hover:text-black text-white font-semibold md:px-10 px-[10px] py-[10px] md:py-4 rounded-md duration-300 cursor-pointer w-full md:w-fit"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
