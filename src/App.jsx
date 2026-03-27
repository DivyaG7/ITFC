
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Toaster } from "react-hot-toast";
import "./App.css"
import ScrollTopBtn from "./components/ScrollTopBtn"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AboutPage from "./pages/AboutPage";

function App() {
  
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
      <ScrollTopBtn />
    </>
  )
}

export default App
