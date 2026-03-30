const values = [
  {
    title: "Quality First",
    desc: "We prioritize quality in every product and service we deliver.",
  },
  {
    title: "Integrity & Trust",
    desc: "We build long-term relationships through honesty and transparency.",
  },
  {
    title: "Customer Commitment",
    desc: "We focus on understanding and fulfilling customer needs with precision.",
  },
  {
    title: "Reliability",
    desc: "We ensure consistent performance, timely delivery, and dependable solutions.",
  },
  {
    title: "Continuous Improvement",
    desc: "We strive to enhance our processes, products, and services to stay ahead in the industry.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-20">
      
      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Core Values
        </h2>
      </div>

      <div className="relative">
        
        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-red-200 h-full transform -translate-x-1/2"></div>

        {values.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            
            {/* CONTENT */}
            <div className="md:w-1/2 px-6">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* DOT */}
            <div className="hidden md:flex w-12 h-12 bg-red-500 text-white rounded-full items-center justify-center z-10 shadow-lg">
              {index + 1}
            </div>

            {/* EMPTY SPACE */}
            <div className="md:w-1/2"></div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default CoreValues;