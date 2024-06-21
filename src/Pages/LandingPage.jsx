import ExploreOurProduct from "../Components/ExploreOurProduct/ExploreOurProduct"
import FeaturedProduct from "../Components/Featured Product/FeaturedProduct"
import Features from "../Components/Features/Features"
import Footer from "../Components/Footer/Footer"
import Hero from "../Components/Hero/Hero"


const LandingPage = () => {
    return (
        <div>
            <Hero/>
            <Features/>
            <FeaturedProduct/>
            <ExploreOurProduct/>
            <Footer/>
        </div>
    )
}

export default LandingPage