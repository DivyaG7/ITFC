import bg from "../assets/product/technical service background.jpeg"
import custom from "../assets/product/custom fabirication.jpeg"
import installtion from "../assets/product/installtion and technical support.jpeg"
import quality from "../assets/product/quality control.jpeg"

const services = [
    {
        title: "Custom Fabrication",
        description:
            "We offer customized fabrication services tailored to your projects using advanced welding techniques and expertise.",
        points: [
            "TIG & MIG Welding",
            "Pipe Fabrication",
            "Prefabricated Piping",
            "CNC Machining",
            "Structural Steel Fabrication",
        ],
        highlight:
            "Case Study: Delivered 150+ custom pipe spools for a major oil refinery, meeting stringent QA standards and tight deadlines.",
        img: custom,
    },
    {
        title: "Installation & Technical Support",
        description:
            "Our expert team provides on-site installation and comprehensive technical support to ensure seamless integration and optimal performance.",
        points: [
            "On-site Installation",
            "System Commissioning",
            "Troubleshooting & Repairs",
            "Maintenance Contracts",
            "Technical Consultation",
        ],
        highlight:
            "Case Study: Power Plant Upgrade – Successfully installed and commissioned critical piping systems for a thermal power plant, enhancing efficiency and safety.",
        img: installtion,
    },
    {
        title: "Quality Control",
        description:
            "We adhere to rigorous quality control processes to guarantee the highest standards of safety, reliability, and compliance.",
        points: [
            "Hydro-testing",
            "Non-Destructive Testing (NDT)",
            "Material Inspection",
            "Dimensional Checks",
            "Documentation & Certification"
        ],
        highlight:
            "Case Study: Subsea Pipeline - Implemented extensive quality control measures including NDT and hydro-testing for a subsea pipeline project, ensuring zero defects.",
        img: quality,
    },
];

function Services() {
    return (
        <div className="bg-[#f5f6f8] min-h-screen">

            {/* HERO */}
            <div className="relative h-[300px] md:h-[400px]">
                <img
                    src={bg}
                    alt="background-image"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                        Technical Services & Fabrication
                    </h1>
                    <p className="text-gray-300 text-sm mt-2">
                        Precision Engineering and Expert Support for Industrial Projects
                    </p>

                    <button className="mt-4 bg-white text-black px-4 py-2 rounded text-sm">
                        Explore Capabilities
                    </button>
                </div>
            </div>

            {/* SECTIONS */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-6">

                {services.map((service, index) => (
                    <div
                        className={`flex flex-col lg:flex-row items-stretch h-auto lg:h-[400px] shadow rounded-xl overflow-hidden ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* IMAGE */}
                        <div className="w-full lg:w-1/2 h-full">
                            <img
                                src={service.img}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="w-full lg:w-1/2 h-full bg-white p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-[#0f2a44]">
                                    {service.title}
                                </h2>

                                <p className="text-sm font-semibold mt-2">
                                    {service.description}
                                </p>

                                <ul className="mt-3 text-sm font-semibold space-y-1">
                                    {service.points.map((point, i) => (
                                        <li key={i}>• {point}</li>
                                    ))}
                                </ul>

                                <div className="border-l-4 border-[#0f2a44] bg-gray-50 p-3 mt-4 rounded text-sm font-semibold">
                                    {service.highlight}
                                </div>
                            </div>

                            <div>
                            <button className="border px-4 py-2 text-sm rounded mt-4">
                                View More Case Studies
                            </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Services