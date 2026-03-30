import { useState, useEffect } from 'react'
import LogoScroller from './LogoScroller';

const testimonials = [
    {
        name: "Wesly J",
        role: "Manufacturing Partner, India",
        image: "https://i.pravatar.cc/100?img=3",
        text: "Indian Tubes and Fittings Company delivers consistent quality and dependable service. Their precision and commitment make them a reliable long-term partner.",
    },
    {
        name: "Arun K",
        role: "Procurement Head",
        image: "https://i.pravatar.cc/100?img=5",
        text: "Excellent service and fast delivery. Highly recommend working with them.",
    },
    {
        name: "Meena R",
        role: "Operations Manager",
        image: "https://i.pravatar.cc/100?img=6",
        text: "Professional team with strong technical expertise.",
    },
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);

    // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3 sec

    return () => clearInterval(interval);
  }, []);

    // const next = () => setIndex((index + 1) % testimonials.length);
    // const prev = () =>
    //     setIndex((index - 1 + testimonials.length) % testimonials.length);
    return (
        <div className="bg-gray-100 py-16 text-center">
            <h2 className="text-3xl text-[#0E2A47] md:text-5xl font-bold mb-10">
                What Our <span className="text-red-500">Clients</span> Say
            </h2>

            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 relative">
                <p className="text-gray-600 italic mb-6">
                    “{testimonials[index].text}”
                </p>

                <img
                    src={testimonials[index].image}
                    alt=""
                    className="w-14 h-14 rounded-full mx-auto mb-3"
                    loading="lazy"
                />

                <h4 className="font-semibold">{testimonials[index].name}</h4>
                <p className="text-sm text-gray-500">
                    {testimonials[index].role}
                </p>

                {/* Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-gray-800" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>

                {/* Arrows */}
                {/* <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-xl"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xl"
                >
                    ›
                </button> */}
            </div>

            {/* Logos */}
            <LogoScroller />
        </div>
    )
}

export default Testimonial

