import { Link } from "react-router-dom"
import img1 from "../assets/service1.png"
import img2 from "../assets/service2.png"
import img3 from "../assets/service3.png"
import img4 from "../assets/service4.png"
import img5 from "../assets/service5.png"
import img6 from "../assets/service6.png"

const Services = () => {
    const services = [
        { id: "01", title: "Industrial Pipes & Tubes", desc: "We supply and stock a wide range of industrial pipes and tubes from leading brands, ensuring quality, durability, and ready availability.", img: img1 },
        { id: "02", title: "Pipe Fittings & Flanges", desc: "High-quality pipe fittings, flanges, elbows, tees, and reducers designed for secure, leak-proof connections.", img: img2 },
        { id: "03", title: "Industrial Valves", desc: "Durable and efficient industrial valves for reliable flow control across various applications.", img: img3 },
        { id: "04", title: "Custom Fabrication", desc: "Precision fabrication of piping components tailored to project-specific requirements.", img: img4 },
        { id: "05", title: "Pipe Supports & Accessories", desc: "Complete range of pipe supports, gaskets, fasteners, bolts, and nuts for full system support.", img: img5 },
        { id: "06", title: "Installation & Technical Support", desc: "Expert installation, maintenance, and technical consultation to ensure smooth and efficient operations.", img: img6 }
    ];
    return (
        <div className="max-w-7xl mx-auto px-6 py-16" id="services">

            {/* TITLE */}
            <h2 className="text-center text-3xl md:text-5xl text-[#0E2A47] font-bold mb-10">Our Core
                <span className="text-red-500"> Industrial Piping Services</span>
            </h2>

            {/* GRID */}
            <div className="grid md:grid-cols-2 gap-8">

                {services.map((item) => (
                    <div
                        key={item.id}
                        className="md:flex flex-cols items-center justify-between hover:shadow-xl p-5 border border-dashed rounded-xl"
                    >

                        {/* LEFT CONTENT */}
                        <div className="flex-1">

                            <h1 className="text-6xl text-gray-300 font-bold">
                                {item.id}
                            </h1>

                            <h3 className="font-bold text-2xl text-[#0E2A47] mt-2">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-500 mt-2">
                                {item.desc}
                            </p>

                            {/* <button className="mt-3 text-red-500 hover:bg-red-500 hover:text-white border border-red-500 px-3 py-1 rounded-xl hover:bg-red-500 hover:text-white transition">
                                Learn More
                            </button> */}

                        </div>

                        {/* RIGHT IMAGE */}
                        <img
                            src={item.img}
                            className="w-32 h-32 mt-4 md:mt-0 lg:mt-0 md:w-48 md:h-60 object-cover rounded-2xl"
                        />

                    </div>
                ))}

            </div>

            {/* BUTTON */}
            <div className="text-center mt-10">
                <Link to="/services">
                    <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                        View All Services
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Services