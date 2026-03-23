import img1 from "../assets/service1.png"
import img2 from "../assets/service2.png"
import img3 from "../assets/service3.png"
import img4 from "../assets/service4.png"
import img5 from "../assets/service5.png"
import img6 from "../assets/service6.png"

const Services = () => {
    const services = [
        { id: "01", title: "Mechanical Engineer", desc: "Precision-engineered steel tubes and pipes suitable for industrial, structural, and commercial applications.", img: img1 },
        { id: "02", title: "Quality Control Inspector", desc: "Every product undergoes strict quality checks to ensure durability, strength, and compliance.", img: img2 },
        { id: "03", title: "Project Manager", desc: "Tailor-made tube and fitting solutions designed as per client drawings and specifications.", img: img3 },
        { id: "04", title: "Welder - Experienced", desc: "Experienced welding professionals ensure clean joints, smooth finishes, and superior strength.", img: img4 },
        { id: "05", title: "Health and Safety Specialist", desc: "Safe manufacturing practices with adherence to industry safety and quality norms.", img: img5 },
        { id: "06", title: "Electrical Technician", desc: "Expert technical assistance from design consultation to final product delivery.", img: img6 }
    ];
    return (
        <div className="max-w-7xl mx-auto px-6 py-16" id="services">

            {/* TITLE */}
            <h2 className="text-center text-3xl md:text-5xl text-[#0E2A47] font-bold mb-10">
                <span className="text-red-500">Manufacturing</span> Services
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

                            <button className="mt-3 text-red-500 hover:bg-red-500 hover:text-white border border-red-500 px-3 py-1 rounded-xl hover:bg-red-500 hover:text-white transition">
                                Learn More
                            </button>

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
                <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
                    View All Services
                </button>
            </div>

        </div>
    )
}

export default Services