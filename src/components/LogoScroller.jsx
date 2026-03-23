import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"
import logo6 from "../assets/logo6.png"
import logo7 from "../assets/logo7.png"

const logos = [ logo1, logo2, logo3, logo4, logo5, logo6, logo7 ];

function LogoScroller() {
  return (
    <div className="overflow-hidden mt-12">
      <div className="flex w-max animate-scroll space-x-12 items-center">
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="h-10 object-contain opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}

export default LogoScroller;