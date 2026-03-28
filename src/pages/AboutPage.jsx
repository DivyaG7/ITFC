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

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            We are One of the Largest Stockists & Distributors for Industrial Pipes , Pipe Fittings, Flanges, Valves & Others,.
                        </p>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            We Stock and trade , 100+ Brands Such as Jindal , MSL , Audco , Leader, Zoloto , Prime , Flowjet , Kirloskar, L&T Valves , Kranti Water Meters, etc etc etc
                        </p>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">We have a policy of Transparent Competitive Pricing, Prompt Services , Timely Delivery and Pan India Service, We serve Mostly Customers having thier offices  , Factories & Project Sites , in the states of Tamilnadu , Andhra Pradesh , Telengana, Kerala & Karnataka, but also are able to support clients for thier Turnkey Requirements Pan India Basis , case to case.</p>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">Our Major Customers are Industries Like Sugar Mills, Paper Mills, Oil Processing Units , Petroleum Product Manufactuers, Furniture Manufacurers, Large PSU's Like Gail India ,indian Oil Corpn Ltd, Govt Undertakings Like NPCIL, Contqactors like Boiler erectors, Firefighting ,Air Conditioning & Turnkey Project Engineers.</p>

                        <div className="flex gap-3">
                            {/* <button className="bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#123a5c] transition">
          About Us
        </button> */}

                            <Link to="/contact">
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