import { Link } from "react-router-dom";
// import bg from "../assets/aboutbg.png";
// import img2 from "../assets/product/custom fabirication.jpeg"
import { FaEye } from "react-icons/fa";
import CoreValues from "../components/CoreValues";
import {
    Factory,
    BadgeCheck,
    FileCheck,
    PackageCheck,
    Wrench,
    Truck,
    Award,
    TrendingUp,
    Eye,
} from "lucide-react";
import ExperienceSection from "../components/ExperienceSection";

const features = [
    {
        title: "Wide Range Manufacturing",
        desc: "Manufacturing flanges and pipe fittings using a wide range of metals",
        icon: Factory,
    },
    {
        title: "Authorized Dealers",
        desc: "Authorized dealers and stockists of leading brands like Jindal Star, Hisar, MSL, JSL, USTPL, Tata Pipes, VS, B.M, and more",
        icon: BadgeCheck,
    },
    {
        title: "ISI Certified Products",
        desc: "Supplying ISI-certified products ensuring quality and compliance",
        icon: PackageCheck,
    },
    {
        title: "Certified Documentation",
        desc: "Providing IBR Test Certificates and Mill Test Certificates (MTC)",
        icon: FileCheck,
    },
    {
        title: "Complete Solutions",
        desc: "Offering complete piping solutions including bolts, nuts, gaskets, and fasteners",
        icon: Wrench,
    },
    {
        title: "On-Time Delivery",
        desc: "Strong commitment to quality, reliability, and on-time delivery",
        icon: Truck,
    },
];

const AboutPage = () => {
    return (
        <>

            {/* HEADER */}
            <div className="bg-[#0f2a44] text-white pt-28 md:pt-32 py-10 md:py-12 text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                    About Us
                </h1>
            </div>


            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

                <div className="flex flex-col lg:flex-row items-stretch lg:h-[450px] rounded-2xl overflow-hidden">

                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-1/2 bg-white p-8 flex flex-col justify-center">

                        <h2 className="text-2xl md:text-3xl font-bold text-[#0f2a44] mb-4">Indian Tubes & Fittings Co.</h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0f2a44] mb-4">
                            Your Trusted Industrial Piping Partner
                        </h3>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            Indian Tubes & Fittings Co. is dedicated to delivering excellence in the manufacturing and supply of high-quality industrial piping components. With decades of experience, we have established ourselves as a reliable and trusted name in the industrial sector.
                        </p>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            Our product range includes flanges, pipe bends, elbows, tee joints, reducers, unions, equal cross tees, valves, and a wide range of piping accessories, designed to meet diverse industrial requirements.
                        </p>

                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                            With a strong focus on quality, precision, and performance, we continuously strive to deliver durable and efficient solutions that support modern industrial operations.
                        </p>


                        <div className="flex gap-3">
                            {/* <button className="bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#123a5c] transition">
          About Us
        </button> */}

                            {/* <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                                <button className="bg-[#0f2a44] text-white px-5 py-2 rounded-lg text-sm hover:bg-[#123a5c] transition">
                                    Email Us
                                </button>
                            </Link> */}
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="w-full lg:w-1/2 h-full p-5">
                        <img
                            src="https://res.cloudinary.com/dlnjl246g/image/upload/v1774883231/custom_fabirication_jnc6by.jpg"
                            alt="about-image"
                            className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
                            loading="lazy"
                        />
                    </div>

                </div>
            </div>



            {/* WHY CHOOSE US */}
            <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 px-4 sm:px-6 lg:px-20 mt-10">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        We deliver excellence through quality products and reliable service.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white border p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 group-hover:bg-blue-600">
                                    <Icon className="text-blue-600 group-hover:text-white" size={24} />
                                </div>

                                <h3 className="mt-4 text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>


            <ExperienceSection />




            <section className="bg-gradient-to-r from-red-50 to-white py-16 px-6 md:px-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our Vision
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            To be a leading and trusted provider of industrial piping solutions
                            in India, recognized for quality, reliability, and long-term
                            customer relationships.
                        </p>

                        <div className="mt-6">
                            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT DESIGN */}
                    <div className="relative flex justify-center">

                        <div className="w-72 h-72 bg-red-100 rounded-full absolute blur-3xl opacity-50"></div>

                        <div className="bg-white shadow-xl rounded-2xl p-8 text-center relative z-10 hover:scale-105 transition duration-300">
                            <FaEye className="text-red-500 text-5xl mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Vision Driven
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Focused on innovation, trust, and long-term success.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            <section>
                <CoreValues />
            </section>

        </>
    )
}

export default AboutPage