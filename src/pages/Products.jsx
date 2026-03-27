import { useState } from "react";
import alloy from "../assets/product/alloy tube.jpeg"
import duplex from "../assets/product/duplex.png"
import low from "../assets/product/low temperature tube.jpeg"
import stainless from "../assets/product/stainless.jpeg"
import steamless from "../assets/product/steamless carbon images.png"
import oil from "../assets/product/OIL AND GAS.jpeg"

const categories = [
    {
        title: "Steel Tubes",
        items: ["Seamless Tubes", "ERW Tubes", "Boiler Tubes"],
    },
    {
        title: "Pipe Fittings",
        items: ["Elbows", "Tees", "Reducers", "Flanges"],
    },
    {
        title: "Valves",
        items: ["Gate Valves", "Globe Valves", "Check Valves"],
    },
    {
        title: "Custom Fabrication",
        items: [],
    },
];

const productData = {
    "Seamless Tubes": [
        {
            name: "Seamless Carbon Steel Tubes",
            size: '1/2" - 24"',
            material: "ASTM A106 Gr. B",
            pressure: "Class 150 - 2500",
            img: steamless,
        },
        {
            name: "Alloy Steel Boiler Tubes",
            size: '1/2" - 16"',
            material: "ASTM A335 P11/P22",
            pressure: "Class 150 - 2500",
            img: alloy,
        },
        {
            name: "Line Pipes for Oil & Gas",
            size: '2" - 48"',
            material: "API 5L Gr. B/X42",
            pressure: "Class 150 - 1500",
            img: oil,
        },
        {
            name: "Stainless Steel Heat Exchanger Tubes",
            size: '1/4" - 6"',
            material: "ASTM A213 TP304/316",
            pressure: "Class 150 - 2500",
            img: stainless,
        },
        {
            name: "Low Temperature Carbon Steel Tubes",
            size: '1/2" - 20"',
            material: "ASTM A333 Gr. 6",
            pressure: "Class 150 - 1500",
            img: low,
        },
        {
            name: "Duplex Stainless Steel Tubes",
            size: '1/2" - 12"',
            material: "ASTM A790 UNS S31803",
            pressure: "Class 150 - 2500",
            img: duplex,
        },
    ],

    "ERW Tubes": [
        {
            name: "ERW Black Steel Pipes",
            size: '1/2" - 16"',
            material: "IS 1239",
            pressure: "150 - 900",
            img: "https://via.placeholder.com/300",
        },
    ],

    "Elbows": [
        {
            name: "Stainless Steel Elbows",
            size: "1/2 - 48",
            material: "SS 304",
            pressure: "150 - 1500",
            img: "https://via.placeholder.com/300",
        },
    ],
};

function Products() {
    const [activeTab, setActiveTab] = useState("Seamless Tubes");

    const products = productData[activeTab] || [];

    return (
        <div className="bg-[#f5f6f8] min-h-screen">

            {/* HEADER */}
            <div className="bg-[#0f2a44] text-white pt-28 md:pt-32 py-10 md:py-12 text-center px-4">
                <h1 className="text-3xl font-bold">
                    Industrial Product Catalog
                </h1>
                <p className="text-sm mt-2">
                    Explore our comprehensive range of high-quality piping and fittings
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 mt-5 p-4 md:p-8">

                {/* SIDEBAR */}
                <div className="w-full lg:w-1/4 bg-white rounded-xl shadow py-4 h-fit border overflow-x-auto">

                    {categories.map((cat, i) => (
                        <div key={i} className="mb-4">
                            <h2 className="font-bold text-lg text-gray-700 mb-1 px-4">
                                {cat.title}
                            </h2>

                            {cat.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveTab(item)}
                                    className={`cursor-pointer px-4 py-2 rounded-0 text-sm transition
                  ${activeTab === item
                                            ? "bg-gray-400 text-white"
                                            : "hover:bg-gray-100"
                                        }`}
                                >
                                    {item}
                                </div>

                            ))}
                            <hr></hr>

                        </div>

                    ))}


                </div>

                {/* PRODUCTS */}
                <div className="w-full lg:w-3/4">

                    <h2 className="text-2xl text-[#0f2a44] font-bold mb-4">
                        {activeTab}
                    </h2>

                    {products.length === 0 ? (
                        <p className="text-gray-500">No products available</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            {products.map((product, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow p-3 hover:shadow-lg transition flex flex-col"
                                >
                                    <img
                                        src={product.img}
                                        alt=""
                                        className="w-full h-40 object-cover rounded-lg"
                                    />

                                    <div className="flex flex-col flex-grow gap-2">

                                        <h3 className="font-bold text-[#0f2a44] text-xl mt-2 line-clamp-2 min-h-[32px]">
                                            {product.name}
                                        </h3>

                                        <p className="text-xs text-gray-700 mt-1">
                                            <span className="font-bold text-black">Size:</span> {product.size}
                                        </p>
                                        <p className="text-xs text-gray-700">
                                            <span className="font-bold text-black">Material:</span> {product.material}
                                        </p>
                                        <p className="text-xs text-gray-700">
                                            <span className="font-bold text-black">Pressure:</span> {product.pressure}
                                        </p>

                                        {/* Push buttons to bottom */}
                                        <div className="mt-auto">
                                            <button className="bg-red-500 text-white text-xs sm:text-sm w-full py-2 rounded mt-2">
                                                Download Datasheet
                                            </button>

                                            <button className="border border-[#0f2a44] text-[#0f2a44] text-xs w-full py-2 rounded mt-2">
                                                Inquire Now
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Products