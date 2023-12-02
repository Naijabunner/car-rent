import refreshrightsquare from "/src/assets/refresh-right-square.png";
import medalstar from "/src/assets/medal-star.png";
import gps from "/src/assets/gps.png";
const Ourservices = () => {
    return ( <>
    <section className="ourservices_wrapper">
        <div className="ourservices_main_wrapper">
            <div className="ourservices_header_wrapper">
                <p>Our Premium Services</p>
            </div>
            <aside>
            Carent is a reputable car rental company that offers <br /> a wide range of useful services for every taste.
            </aside>
            <div className="ourservices_card_wrapper">
                <div className="ourservices_card1">
                    <img src="\src\assets\refresh-right-square.png" alt="" />
                    <h4 className="card_head"> 24 Hours Support</h4>
                    <p className="card_text">We support you all hours of the day</p>
                </div>
                <div className="ourservices_card2">
                <img src="\src\assets\medal-star.png" alt="" />
                <h4 className="card_head"> Qualified Assurance </h4>
                    <p className="card_text">All cars have a <br /> valid insurance</p>
                </div>
                <div className="ourservices_card3">
                    <img src="\src\assets\gps.png" alt="" />
                <h4 className="card_head">GPS on Cars</h4>
                    <p className="card_text">All cars are equipped with <br /> GPS navigation system</p>
                </div>
            </div>
        </div>
        <div className="premium_blackbg"></div>
    </section>
    </> );
}
 
export default Ourservices;