import React from "react";
import homebg from "../assets/home-bg.png"

const Hero = () => {
  return (
    <div id="home"
      className="relative min-h-screen flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 mt-3 w-full flex">
        <div className="backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-3xl">

          <p className="text-xs md:text-sm tracking-widest text-gray-300 mb-3">
            WELCOME TO INDIAN TUBES & FITTINGS COMPANY
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-6">
            TRUSTED PARTNER IN THE INDIAN INDUSTRIAL SECTOR
          </h1>

          <a href="#about">
            <button className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-lg text-sm md:text-base">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;