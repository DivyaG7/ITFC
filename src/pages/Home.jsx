import About from "../components/About"
import FeatureSection from "../components/FeatureSection"
import Form from "../components/Form"
import Hero from "../components/Hero"
import Industries from "../components/Industries"
import QuoteSection from "../components/QuoteSection"
import Services from "../components/Services"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <FeatureSection />
            <Services />
            <Form />
            <Industries />
            <Testimonial />
            <QuoteSection />
        </>
    )
}

export default Home