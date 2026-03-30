import React from "react";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import bg from "../assets/aboutbg.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about" className="py-16 px-6 mb-0 pb-2">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP IMAGE */}
          <div className="relative">
            <img src={img1} className="rounded-2xl" loading="lazy" />
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
                Your Trusted Industrial Piping Partner
              </h3>

              <p className="text-gray-400 mb-4 text-sm">
                At Indian Tubes & Fittings Co., we specialize in delivering high-quality industrial pipes, fittings, and valves designed to meet the demands of modern industries. With a strong focus on precision, durability, and performance, our solutions are trusted across sectors such as construction, manufacturing, and infrastructure.
              </p>

              <p className="text-gray-400 mb-4 text-sm">
                Our expertise, combined with a commitment to quality and industry standards, ensures that every product we deliver contributes to safe, efficient, and long-lasting operations.
              </p>

              <div className="flex gap-3">
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  <button className="bg-red-500 px-4 py-2 rounded-lg text-sm">
                    About Us
                  </button>
                </Link>

                <Link to="/#quote">
                  <button className="border border-red-300 px-4 py-2 rounded-lg text-sm text-red-400">
                    Email us now!
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">

          {/* TOP TEXT */}
          <div>
            <h2 className="text-3xl text-[#0E2A47] md:text-4xl font-bold mb-4">
              Engineering Strength. Delivering Reliable {" "}
              <span className="text-red-500 md:text-5xl">
                Industrial Pipes, Fittings & Valves{" "}
              </span>
              Across India
            </h2>

            <p className="text-gray-500 mb-6">
              At Indian Tubes & Fittings Co., we deliver high-performance industrial piping solutions built for durability, safety, and efficiency. With decades of expertise, we ensure every product meets the highest quality standards for demanding industrial applications.
            </p>

            {/* STATS */}
            <div className="xm:flex-col md:flex gap-[80px]">
              <div>
                <h3 className="text-3xl md:text-6xl font-bold text-red-500">6+</h3>
                <p className="text-sm text-gray-500">Years of Experience</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-6xl font-bold text-red-500">500+</h3>
                <p className="text-sm text-gray-500">Successfully Delivered Projects</p>
              </div>

              <div>
                <h3 className="text-3xl md:text-6xl font-bold text-red-500">20+</h3>
                <p className="text-sm text-gray-500">Satisfied city Clients </p>
              </div>
            </div>
          </div>

          {/* BOTTOM IMAGE */}
          <img src={img2} className="rounded-2xl w-[450px] md:h-[500px] h-[400px] object-cover" loading="lazy" />

        </div>

      </div>
    </div>
  );
};

export default About;