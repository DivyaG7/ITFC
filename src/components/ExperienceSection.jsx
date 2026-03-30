import { Briefcase, ShieldCheck } from "lucide-react";

const ExperienceSection = () => {
  const data = [
    {
      icon: <Briefcase size={40} />,
      title: "Decades of Experience",
      desc: "With decades of industry experience, Indian Tubes & Fittings Co. has developed deep expertise in delivering high-quality industrial piping solutions. Our team’s technical knowledge and practical experience enable us to handle complex requirements with precision and efficiency.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Commitment to Excellence",
      desc: "We are committed to maintaining the highest standards of quality, integrity, and professionalism. Our continuous focus on improvement ensures that we consistently deliver products and services that exceed customer expectations.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Heading */}
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2> */}

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-red-500"
            >
              {/* Icon */}
              <div className="text-red-500 mb-4 group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;