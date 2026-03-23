import React from "react";
import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";
import bg from "../assets/aboutbg.png";

const About = () => {
  return (
    <div id="about" className="py-16 px-6 mb-0 pb-2">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP IMAGE */}
          <div className="relative">
            <img src={img1} className="rounded-2xl" />
          </div>

          {/* BOTTOM TEXT WITH BG IMAGE */}
          <div
            className="relative p-6 rounded-2xl text-white overflow-hidden"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0"></div>

            <div className="relative">
              <h3 className="text-xl md:text-3xl font-bold mb-3 text-[#0E2A47]">
                Your Trusted Industrial Manufacturing Partner
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                Although we pride ourselves as machining specialists who are exceptional with machining all types of plastics and metals like Delrin, Polycarbonate, Polypropylene, aluminum, steel and stainless
              </p>

              <div className="flex gap-3">
                <button className="bg-red-500 px-4 py-2 rounded-lg text-sm">
                  About Us
                </button>

                <a href="#quote">
                  <button className="border border-red-300 px-4 py-2 rounded-lg text-sm text-red-400">
                    Email us now!
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP TEXT */}
          <div>
            <h2 className="text-3xl text-[#0E2A47] md:text-4xl font-bold mb-4">
              Engineering Strength. Delivering Reliability from the{" "}
              <span className="text-red-500 md:text-5xl">
                Indian Tubes & Fittings
              </span>
            </h2>

            <p className="text-gray-500 mb-6">
              Our manufacturing facility is equipped with advanced machinery and modern production processes to ensure dimensional accuracy, high strength, and long service life. Every product is manufactured in compliance with industry standards and tested for performance before delivery.
            </p>

            {/* STATS */}
            <div className="flex gap-[120px]">
              <div>
                <h3 className="text-3xl md:text-6xl font-bold text-red-500">5+</h3>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-6xl font-bold text-red-500">500+</h3>
                <p className="text-sm text-gray-500">Completed Projects</p>
              </div>
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <img src={img2} className="rounded-2xl w-[450px] h-[600px] object-cover" />

        </div>

      </div>
    </div>
  );
};

export default About;