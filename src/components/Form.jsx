import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import formbg from "../assets/formbg.png";
import { Link } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.includes("@")) return "Invalid email";
    if (form.phone && form.phone.length < 10)
      return "Phone must be at least 10 digits";
    if (form.quantity && form.quantity <= 0)
      return "Quantity must be greater than 0";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/quote", form);

      toast.success("Form submitted successfully!");

      // RESET FORM
      setForm({
        name: "",
        email: "",
        phone: "",
        quantity: "",
        message: ""
      });

    } catch (err) {
      console.error(err);
      toast.error("Failed to send request");
    }
  };

  return (
    <div id="quote"
      className="w-full min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${formbg})` }}
    >
      <div className="w-full bg-black/60 py-20 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">

        {/* LEFT */}
        <div className="text-white max-w-xl mb-10 md:mb-0">
          <p className="text-sm uppercase tracking-widest mb-2">
            Request a Quote
          </p>
          <h1 className="text-4xl mt-5 md:text-5xl font-bold">
            Ready to Start Your  <br />  Industrial Piping Project?
          </h1>
          <p className="mt-5 text-gray-300">
            Whether you require industrial pipes, fittings, valves, or customized piping solutions, Indian Tubes & Fittings Co. is here to support your project, deliver high-quality products with timely service and reliable performance for all industrial needs.
          </p>
          
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <button className="bg-red-500 text-white px-6 py-2 mt-3 rounded-lg">
              Contact us today
            </button>
          </Link>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl w-full max-w-md text-white border border-white/20 shadow-lg"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Request a Quote
          </h2>

          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Your name"
              className="w-full mb-3 p-2 rounded placeholder:text-white bg-white/10 border border-white/20"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Your email"
              className="w-full mb-3 p-2 rounded placeholder:text-white bg-white/10 border border-white/20"
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="Phone number"
            className="w-full mb-3 p-2 rounded placeholder:text-white bg-white/10 border border-white/20"
            onChange={handleChange}
          />

          <input
            type="number"
            name="quantity"
            value={form.quantity}
            placeholder="Quantity"
            className="w-full mb-3 p-2 rounded placeholder:text-white bg-white/10 border border-white/20"
            onChange={handleChange}
          />

          <textarea
            name="message"
            value={form.message}
            placeholder="Message"
            className="w-full mb-4 p-2 rounded placeholder:text-white bg-white/10 border border-white/20"
            rows="3"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-white text-[#0E2A47] py-2 rounded hover:bg-gray-200 transition"
          >
            Submit
          </button>

          <p className="mt-4 text-white text-sm">
            Here at Indian Tubes and Fittings Co your privacy is important to us. That is to say, any information shared will be kept internal, confidential, and secure.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Form;