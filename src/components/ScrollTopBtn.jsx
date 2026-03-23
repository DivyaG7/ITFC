import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button
        onClick={scrollTop}
        className="w-12 h-12 flex items-center justify-center rounded-full 
        bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg 
        hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollTopBtn;