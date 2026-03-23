import industrybg from "../assets/industrybg.png"
import img1 from "../assets/industry1.png"
import img2 from "../assets/industry2.png"
import img3 from "../assets/industry3.png"
import img4 from "../assets/industry4.png"
import img5 from "../assets/industry5.png"
import img6 from "../assets/industry6.png"

const Industries = () => {
    const industries = [
        {
            title: "Construction & Infrastructure ",
            img: img1,
            desc: "We provide durable solutions for large-scale infrastructure."
        },
        {
            title: "Manufacturing & Engineering ",
            img: img2,
            desc: "Precision fabrication services for industrial needs."
        },
        {
            title: "Oil & Gas",
            img: img4,
            desc: "Reliable components for oil and gas industries."
        },
        {
            title: "Power & Energy",
            img: img3,
            desc: "Supporting renewable and traditional energy sectors."
        },
        {
            title: "Water Treatment & Utilities ",
            img: img5,
            desc: "High-quality manufacturing for automotive sector."
        },
    ];
    return (
        <div id="products"
            className="py-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${industrybg})` }}
        >
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* TITLE */}
                <h2 className="text-3xl text-[#0E2A47] md:text-5xl font-bold mb-10">
                    <span className="text-red-500">Industries</span> we serve
                </h2>

                {/* CARDS */}
                <div className="flex gap-10 items-end justify-center flex-wrap">

                    {industries.map((item, index) => {

                        const isTall = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative w-44 rounded-2xl overflow-hidden group cursor-pointer ${isTall ? "h-72" : "h-56"
                                    }`}
                            >

                                {/* IMAGE */}
                                <img
                                    src={item.img}
                                    className="w-full h-full object-cover"
                                />

                                {/* DARK OVERLAY */}
                                <div className="absolute inset-0 bg-black/40"></div>

                                {/* TEXT */}
                                <div className="absolute text-left bottom-[-50px] p-4 text-white w-full transition-all duration-300 group-hover:bottom-6">

                                    <h3 className="font-semibold text-lg">
                                        {item.title}
                                    </h3>

                                    {/* HOVER TEXT */}
                                    <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {/* BUTTON */}
                <a href="#quote">
                    <button className="mt-10 bg-red-500 text-white px-6 py-2 rounded-lg">
                        Request a Quote
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Industries