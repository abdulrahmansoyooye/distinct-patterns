// "use client";
import React from "react";

const Vision = (props) => {
  return (
    <div className="flex flex-col items-center px-4 lg:px-12">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center text-gray-600 my-8">
        <span className="text-black">OUR</span> {props.head}
      </h1>
      <p className="text-lg md:text-2xl lg:text-5xl text-left text-gray-800 mb-6">
        {props.text}
        <span className="text-black">{props.text2}</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <img
          src={`/assets/${props.img1}`}
          className="w-full h-auto object-contain"
          alt="vision-1"
        />
        <img
          src={`/assets/${props.img2}`}
          className="w-full h-auto object-contain"
          alt="vision-2"
        />
      </div>
    </div>
  );
};

export default Vision;
