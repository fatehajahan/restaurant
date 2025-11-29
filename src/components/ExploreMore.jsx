import React, { useState } from "react";
import { exploreMoreData } from "../data";

const ExploreMore = () => {
  const categories = ["cake", "muffin", "croissant", "tart"];
  const [activeCategory, setActiveCategory] = useState("cake");

  // Dynamic Grid Classes
  const gridClass = {
    cake: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    muffin: "grid-cols-1 sm:grid-cols-2 md:grid-cols-2",
    croissant: "grid-cols-1 sm:grid-cols-2 md:grid-cols-2",
    tart: "grid-cols-1 sm:grid-cols-2 md:grid-cols-2",
  };

  return (
    <section className="py-[80px] px-4 md:px-0">
      <div className="container mx-auto">

        {/* Dynamic Heading */}
        <h2 className="font-sansita text-[40px] sm:text-[50px] md:text-[64px] font-semibold text-center capitalize">
          Explore More
        </h2>

        {/* Pagination Tabs */}
        <div className="capitalize font-poppins text-[18px] sm:text-[20px] md:text-[22px] flex flex-wrap justify-center gap-x-6 sm:gap-x-12 pt-[30px] font-semibold">
          {categories.map((item) => (
            <div
              key={item}
              onClick={() => setActiveCategory(item)}
              className="cursor-pointer group w-fit"
            >
              <p
                className={`duration-300 ${
                  activeCategory === item ? "text-[#E9BD8C]" : "text-black"
                }`}
              >
                {item}
              </p>

              <span
                className={`bg-[#E9BD8C] h-1 w-full block origin-left transition-transform duration-300
                ${activeCategory === item ? "scale-x-100" : "scale-x-0"}`}
              ></span>
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="py-[50px]">
          <div className={`grid gap-6 sm:gap-8 ${gridClass[activeCategory]}`}>
            {exploreMoreData[activeCategory].map((item, idx, arr) => {
              // Determine last row single item for masonry effect
              const columns =
                activeCategory === "cake" ? 3 : 2; // columns per category
              const isLastSingle =
                arr.length % columns === 1 && idx === arr.length - 1;

              return (
                <div
                  key={item.id}
                  className={`cursor-pointer hover:scale-105 duration-500 relative group rounded-xl overflow-hidden
                    ${isLastSingle ? "sm:col-span-2 md:col-span-3" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.desc}
                    className="rounded-xl w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover"
                  />

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center p-4 text-center">
                    <p className="text-white font-poppins text-[16px] sm:text-[18px] md:text-[20px] font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
