import About from "./components/About"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Hero from "./components/Hero"
import Industries from "./components/Industries"
import Navbar from "./components/Navbar"
import QuoteSection from "./components/QuoteSection"
import Services from "./components/Services"
import Testimonial from "./components/Testimonial"
import { Toaster } from "react-hot-toast";
import "./App.css"
import ScrollTopBtn from "./components/ScrollTopBtn"

function App() {
  
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <Hero />
      <About />
      <FeatureSection />
      <Services />
      <Form />
      <Industries />
      <Testimonial />
      <QuoteSection />
      <Footer />
      <ScrollTopBtn />
    </>
  )
}

export default App
