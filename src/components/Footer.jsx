import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="contact" className="bg-[#0f2a44] text-white p-6 overflow-hidden flex flex-col justify-center items-center">

      {/* Scrolling Big Text */}
      <div className="whitespace-nowrap overflow-hidden border-b border-gray-600 pb-4 mb-8">
        <div className="animate-marquee inline-block text-4xl md:text-6xl font-bold">
          Trusted Partner in the <span className="text-red-500">Indian Tubes & Fittings</span>
        </div>
      </div>

      {/* Footer Content (static) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 text-sm">
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-2 text-xl">Quick Links</h4>
          <Link to="/products">
            <p>Products</p>
          </Link>
          <Link to="/services">
            <p>Services</p>
          </Link>
          <Link href="/about">
            <p>About Us</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-2 text-xl">Our Products</h4>
          <p>Steel Tubes</p>
          <p>Steel Pipes</p>
          <p>Industrial Fittings</p>
          <p>Custom Fabrication</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-2 text-xl">Industries</h4>
          <p>Infrastructure</p>
          <p>Automotive</p>
          <p>Oil & Gas</p>
          <p>Energy</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="font-semibold mb-2 text-xl">Contact</h4>
          <p>Indian Tubes and Fittings Company</p>
          <p>📍 Chennai, India</p>
          <p>📞Phone: +91 8056190156</p>
          <p>📧Email: info@indiantubesandfittings.com</p>
          <p>Mon-Sat: 10:00 AM – 08:00 PM</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-sm text-gray-400 border-t border-gray-600 mt-8 px-6 w-full xs:flex-col md:flex justify-between">
        <p className="mt-8">© 2026 Indian Tubes & Fittings. All Rights Reserved.</p>
        <p className="mt-8">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;