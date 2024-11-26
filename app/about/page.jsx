import React from "react";
import Vision from "../../components/Vision";
import Brand from "../../components/Brand";
import Footer from "../../components/Footer";
const Page = () => {
  return (
    <section className="hero-3 p-7 mx-auto">
      <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold text-left text-[#131313]">
        IN RELATION
      </h1>
      <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-semibold text-left text-[#9e9e9e]">
        TO US
      </h1>
      <div className="bg-[#e2dddd] relative w-full p-6 lg:p-10 rounded-lg flex flex-col items-center lg:block">
        {/* Mobile: Image Section */}
        <div className="w-full flex justify-center lg:hidden">
          <img
            className="max-w-full h-auto"
            src="/assets/hero_image_about.png"
            alt="hero_about_img"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 lg:relative lg:z-10 lg:self-end lg:pb-10">
          <h1 className="text-4xl lg:text-5xl font-medium leading-[1.1] mb-6">
            Your First Love
          </h1>
          <p className="text-lg lg:text-xl font-medium leading-7 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <button className="mt-4 px-6 py-2 border border-black text-black">
            SHOP NOW
          </button>
        </div>

        {/* Desktop: Image Section */}
        <div className="hidden lg:block lg:absolute lg:bottom-5 lg:right-[5%]">
          <img
            className="max-w-full h-auto"
            src="/assets/hero_image_about.png"
            alt="hero_about_img"
          />
        </div>
      </div>
      <Vision
        head="VISION"
        img1="vision-1.jpg"
        img2="vision-2.jpg"
        text="Perfection is achieved, not when there is nothing more to add,"
        text2="but when there is nothing left to take away."
      />
      <Vision
        head="MISSION"
        img1="mission-1.jpg"
        img2="mission-2.jpg"
        text="Perfection is achieved, not when there is nothing more to add,"
        text2="but when there is nothing left to take away."
      />
      <Brand />
      <Footer />
    </section>
  );
};

export default Page;
