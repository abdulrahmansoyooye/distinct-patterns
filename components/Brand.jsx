import React from "react";

const Brand = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 lg:px-12 mt-12 lg:mt-24">
      {/* Text Box */}
      <div className="text-box w-full lg:w-1/2 text-left order-1 lg:order-2">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-gray-800 mb-6">
          OUR BRAND <span className="text-gray-500">STORY</span>
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-gray-700 uppercase leading-relaxed mb-6">
          Introducing our latest T-shirt, where comfort meets originality.
          Crafted from premium quality cotton, this T-shirt is designed to
          redefine your casual style. The soft and breathable cotton material
          ensures maximum comfort.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white text-sm md:text-base rounded hover:bg-gray-600 transition">
          SHOP NOW
        </button>
      </div>

      {/* Image Box */}
      <div className="img-box w-full lg:w-1/2 flex lg:justify-center order-2 lg:order-1">
        <img
          src="/assets/brand.jpg"
          alt="brand_story"
          className="w-full lg:w-2/3 h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Brand;
