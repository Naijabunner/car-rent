import About from "../Components/About/about";
import Bookings from "../Components/Booknow/booking";
import Ourservices from "../Components/services";
import Herosection from "../homepage/hero";
import Featuredcars from "../Components/featuredcars";

const Landingpage = () => {
    return ( <>
    <Herosection/>
    <About/>
    <Bookings/>
    <Featuredcars/>
    <Ourservices/>
    </> );
}
 
export default Landingpage;