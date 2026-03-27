import { Link } from "react-router-dom";
import bg from "../assets/aboutbg.png";
import img2 from "../assets/product/custom fabirication.jpeg"

const AboutPage = () => {
    return (
        <>

            {/* HEADER */}
            <div className="bg-[#0f2a44] text-white pt-28 md:pt-32 py-10 md:py-12 text-center px-4">
                <h1 className="text-3xl font-bold">
                    About Us
                </h1>
            </div>


            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

                <div className="flex flex-col lg:flex-row items-stretch lg:h-[450px] rounded-2xl overflow-hidden">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col justify-center">

                        <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a44] mb-4">
                            Your Trusted Industrial Piping Partner
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                            At Indian Tubes & Fittings Co., we specialize in delivering high-quality industrial pipes,
                            fittings, and valves designed to meet the demands of modern industries.
                        </p>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Our expertise ensures precision, durability, and long-lasting performance across multiple sectors.
                        </p>

                        <div className="flex gap-3">
                            {/* <button className="bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#123a5c] transition">
          About Us
        </button> */}

                            <Link to="/conatct">
                                <button className="bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#123a5c] transition">
                                    Email Us
                                </button>
                            </Link>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 h-full p-5">
                        <img
                            src={img2}
                            alt=""
                            className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
                        />
                    </div>

                </div>

            </div>

        </>
    )
}

export default AboutPage