import bg from "../assets/product/technical service background.jpeg"

const optimizeImage = (url) =>
    url.replace("/upload/", "/upload/w_400,q_auto,f_auto/");

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
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883231/custom_fabirication_jnc6by.jpg",
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
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883212/installtion_and_technical_support_cqdi9v.jpg",
    },
    {
        title: "Industrial Pipes & Tubes Supply",
        description:
            "We supply and stock a wide range of industrial pipes and tubes from trusted manufacturers, ensuring strength and reliability.",
        points: [
            "Wide range of industrial pipes in various materials ",
            "Sourced from trusted and certified manufacturers ",
            "High strength and durability for demanding applications ",
            "Ready stock availability for quick delivery ",
            "Suitable for multiple industrial sectors "
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883246/Industrial_Pipes_Tubes_Supply_km6r74.jpg",
    },
    {
        title: "Pipe Fittings & Flanges",
        description:
            "We manufacture and supply high-quality pipe fittings and flanges designed for precision and leak-proof performance.",
        points: [
            "Includes elbows, tees, reducers, unions, and cross fittings",
            "Precision-engineered for secure connections ",
            "Leak-proof and durable design ",
            "Available in multiple sizes and materials ",
            "Compliant with industry standards "
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883245/Pipe_Fittings_Flanges_enovbw.jpg",
    },
    {
        title: "Industrial Valves",
        description:
            "Our range of industrial valves ensures efficient flow control and long service life.",
        points: [
            "Reliable flow control solutions ",
            "Designed for high-pressure applications ",
            "Durable and corrosion-resistant materials ",
            "Suitable for various industrial uses ",
            "Long-lasting performance "
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883829/Industrial_Valves_rlf9yd.jpg",
    },
    
    {
        title: "Piping Accessories Supply",
        description:
            "Complete range of piping accessories required for installation and maintenance.",
        points: [
            "Includes gaskets, bolts, nuts, and fasteners ",
            "High-quality and durable components ",
            "Supports complete piping systems ",
            "Available in various specifications ",
            "Ensures secure and reliable installation "
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883220/Piping_Accessories_Supply_wfdnio.jpg",
    },
    {
        title: "Technical Consultation & Support",
        description:
            "Our team offers expert consultation to help you choose the right solutions.",
        points: [
            "Guidance on product selection ",
            "Industry-specific recommendations ",
            "Technical support for projects ",
            "Helps optimize system performance ",
            "Reliable after-sales support"
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883225/Technical_Consultation_Support_euiza5.jpg",
    },
    {
        title: "Pipe Supports & Hangers",
        description:
            "We provide pipe supports and hangers for system stability and safety.",
        points: [
            "Ensures proper pipe alignment and support ",
            "Reduces stress and vibration in piping systems ",
            "Durable and high-strength materials ",
            "Suitable for various installations ",
            "Enhances system safety and lifespan "
        ],
        img: "https://res.cloudinary.com/dlnjl246g/image/upload/v1774883215/Pipe_Supports_Hangers_fjvluz.jpg",
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
                    loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-5xl font-bold">
                        Technical Services & Fabrication
                    </h1>
                    <p className="text-gray-300 mt-4">
                        Precision Engineering and Expert Support for Industrial Projects
                    </p>

                    {/* <button className="mt-4 bg-white text-black px-4 py-2 rounded text-sm">
                        Explore Capabilities
                    </button> */}
                </div>
            </div>

            {/* SECTIONS */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 space-y-6">

                {services.map((service, index) => (
                    <div
                        className={`flex flex-col lg:flex-row items-stretch h-auto lg:h-[280px] shadow rounded-xl overflow-hidden ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* IMAGE */}
                        <div className="w-full lg:w-1/2 h-full">
                            <img
                                src={optimizeImage(service.img)}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                loading="lazy"
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

                                {/* <div className="border-l-4 border-[#0f2a44] bg-gray-50 p-3 mt-4 rounded text-sm font-semibold">
                                    {service.highlight}
                                </div> */}
                            </div>

                            <div>
                            {/* <button className="border px-4 py-2 text-sm rounded mt-4">
                                View More Case Studies
                            </button> */}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Services