import React from "react";
import bg from "../assets/featurebg.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const FeatureSection = () => {

    const features = [
        {
            icon: icon1,
            title: "Tight Dimensional Tolerances",
            link: "/"
        },
        {
            icon: icon2,
            title: "Reliable Lead Times",
            link: "/"
        },
        {
            icon: icon3,
            title: "Quality-Driven Manufacturing Process",
            link: "/"
        },
        {
            icon: icon4,
            title: "Customer-Focused Approach",
            link: "/"
        }
    ];

    return (
        <div className="relative">

            {/* 🔥 BACKGROUND SECTION */}
            <div
                className="h-[400px] flex items-center"
                style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >


                {/* content */}
                <div className="relative flex justify-center items-center max-w-7xl mx-auto px-6 w-full text-white grid md:grid-cols-2 gap-6">

                    {/* LEFT TEXT */}
                    <div className="border border-white/20 rounded-2xl p-5 w-fit">
                        <p className="text-xs tracking-widest mb-2">
                            BUILT ON ACCURACY, EXPERIENCE & TRUST
                        </p>

                        <h2 className="text-3xl md:text-5xl font-bold">
                            Built on Accuracy, <br /> Experience & Trust
                        </h2>
                    </div>

                    {/* RIGHT TEXT */}
                    <div className="text-sm text-gray-300">
                        We provide a wide range of services tailored to meet the unique needs of
                        modern industries. From precision manufacturing and advanced
                        automation to custom product design and efficient logistics.
                    </div>

                </div>
            </div>

            {/* 🔥 FLOATING CARD */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="bg-white rounded-3xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 relative z-10">

                    {features.map((item, i) => (
                        <div key={i} className="relative flex justify-start">

                            <div className="w-full">
                                {/* ICON */}
                                <img src={item.icon} className="h-10 mb-3" />

                                {/* TEXT */}
                                <p className="text-sm text-[#0E2A47] font-medium mb-4">
                                    {item.title}
                                </p>

                                {/* BUTTON */}
                                <a href={item.link}>
                                    <button className="bg-[#0E2A47] text-white px-3 py-1 rounded-md hover:scale-105 transition">
                                        →
                                    </button>
                                </a>
                            </div>

                            {/* Divider */}
                            {i !== features.length - 1 && (
                                <div className="hidden md:block absolute top-0 right-0 h-full w-[2px] bg-[#0E2A47]"></div>
                            )}

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default FeatureSection;