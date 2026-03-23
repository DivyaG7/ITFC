import quotebg from "../assets/quotebg.png"

function QuoteSection() {
  return (
    <div
      className="relative h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${quotebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >


      {/* Content */}
      <div className="relative z-10 px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Request a Custom Quote
        </h2>

        <p className="text-sm md:text-base max-w-xl text-gray-200 mb-8">
          Tell us your requirement and our experts will get back to you with the
          best manufacturing solution.
        </p>

        <a href="#quote">
          <button className="bg-white text-red-500 font-bold px-6 py-2 rounded-md shadow hover:bg-gray-200 transition">
            Request a Quote
          </button>
        </a>
      </div>
    </div>
  );
}

export default QuoteSection;