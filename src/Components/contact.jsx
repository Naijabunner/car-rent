import contact from "/src/assets/contactus.jpg";
import MainPicture from '/src/assets/MainPicture.jpg';

const Contactus = () => {
  return (
    <>
      <div className="contactus_wrapper">
        <div className="contactus_header_wrapper">
          <p> Contact Us</p>
        </div>
        <div className="formImage_wrapper">
          <div className="contact_form">
            <form>
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Your Email*" />
              <textarea
                name=""
                id=""
                cols="15"
                rows="5"
                placeholder="Your Message"
              ></textarea>
              <button> Send a Message</button>
            </form>
          </div>
          <div className="contact_img">
            <img src={contact} alt="keys image" />
            <img src={MainPicture} alt="keys image" />
            <p>sdfghj</p>
          </div>
        </div>
        <div className="black_bg_contactus">
            <div className="black_bg_text">
                <p>Need help renting a car? Please call </p>
          <aside>+1-333-444-5555</aside>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default Contactus;
