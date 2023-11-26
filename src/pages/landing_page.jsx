import About from "../Components/About/about";
import Bookings from "../Components/Booknow/booking";
import Ourservices from "../Components/services";
import Herosection from "../homepage/hero";
import Featuredcars from "../Components/featuredcars";
import Reviews from "../Components/reviews";
import Extrainfo from "../Components/extrainfo";
import Contactus from "../Components/contact";
import Footer from "../Components/footer";
const Landingpage = () => {
    return ( <>
    <Herosection/>
    <About/>
    <Bookings/>
    <Featuredcars/>
    <Ourservices/>
    <Reviews/>
    <Extrainfo/>
    <Contactus/>
    <Footer/>
    </> );
}
 
export default Landingpage;