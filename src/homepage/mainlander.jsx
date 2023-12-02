import Herosociallinks from "../social_links_hero";
import MainPicture from "/src/assets/MainPicture.jpg";

const Mainlander = () => {
    return ( <>
    <div className="black_bg"></div>
    <Herosociallinks />
    <img src={MainPicture} alt="Car" className="hero_img"/>
    <div className="hero_text_wrapper">
        <h1> Enjoy your life with <br /> our comfortable <br /> cars.</h1>
        <p>Carent, is ready to serve the best <br /> expirience in car rental.</p>
        <button className="explore_btn">
            Explore Now
        </button>
    </div>
    </> );
}
 
export default Mainlander;