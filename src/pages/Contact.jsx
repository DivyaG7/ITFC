import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import bg from "../assets/product/technical service background.jpeg"

const Contact = () => {
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
        <div className="bg-gray-100 min-h-screen">

            {/* HEADER */}
            {/* HERO */}
            <div className="relative h-[300px] md:h-[300px]">
                <img
                    src={bg}
                    alt="background-image"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-white text-2xl md:text-4xl font-bold">
                        Contact Us & Request a Custom Quote
                    </h1>
                </div>
            </div>

            {/* MAIN */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* LEFT - FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-xl border border-white/20 shadow-lg"
                >
                    <h2 className="text-3xl font-semibold mb-4">
                        Request a Quote
                    </h2>

                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        placeholder="Your name"
                        className="w-full mb-3 p-2 rounded placeholder:text-black border border-black/20"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        placeholder="Your email"
                        className="w-full mb-3 p-2 rounded placeholder:text-black border border-black/20"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        placeholder="Phone number"
                        className="w-full mb-3 p-2 rounded placeholder:text-black border border-black/20"
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="quantity"
                        value={form.quantity}
                        placeholder="Quantity"
                        className="w-full mb-3 p-2 rounded placeholder:text-black border border-black/20"
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        placeholder="Message"
                        className="w-full mb-4 p-2 rounded placeholder:text-black border border-black/20"
                        rows="3"
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="w-full bg-black/10 border-black/20  text-[#0E2A47] py-2 rounded hover:bg-gray-200 transition"
                    >
                        Submit
                    </button>

                    <p className="mt-4 text-black text-sm">
                        Here at Indian Tubes and Fittings Co your privacy is important to us. That is to say, any information shared will be kept internal, confidential, and secure.
                    </p>
                </form>

                {/* RIGHT SIDE */}
                <div className="space-y-6">

                    {/* Contact Info */}
                    <div className="p-6 rounded-xl shadow border">
                        <h2 className="text-2xl font-bold text-[#0f2a44] mb-3">
                            Contact Information
                        </h2>

                        <p className="text-sm font-semibold">
                            INDIAN TUBES AND FITTINGS COMPANY
                        </p>

                        <p className="text-sm mt-2">
                            PARRYS MANUFCATURING UNIT 456, Arul murugan nagar, Vichoor, Ponneri - 600103

                        </p>

                        <p className="text-sm mt-1">📞 +91 8056190156</p>
                        <p className="text-sm">✉️ <span className="font-bold">Email:</span> info@indiantubesandfittings.com</p>
                        <p className="text-sm">🕒 <span className="font-bold">Mon-Sat:</span> 10:00 AM - 08:00 PM</p>
                    </div>

                    {/* Map */}
                    <div className="p-4 rounded-xl shadow border">
                        <h2 className="text-lg font-bold text-[#0f2a44] mb-2">
                            Visit Us
                        </h2>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0274904931!2d80.2880935!3d13.0974443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526fb9dd026bd7%3A0x70172e12c759c291!2sINDIAN%20TUBES%20AND%20FITTINGS%20COMPANY!5e0!3m2!1sen!2sin!4v1774679035387!5m2!1sen!2sin"
                            className="w-full h-64 rounded"
                            loading="lazy"
                        ></iframe>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact