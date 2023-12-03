
import MainPicture from "/src/assets/MainPicture.jpg"
const Booknow = () => {
    return (
      <>
        <section className="booknow_sec">
          <div className="booknow_wrapper">
            <div className="booknow_details">
              <div className="car_details">
                <h4>Car Name</h4>
                <img src={MainPicture} alt="" />
                <div className="pickup_dropoff_wrapper">
                  <div className="pickup_wrapper">
                    <h4>PIck-up</h4>
                    <p>March 11, 2019, 10:00AM</p>
                    <aside>Pick-Up Location</aside>
                  </div>
                  <div className="dropoff_wrapper">
                    <h4>PIck-up</h4>
                    <p>March 11, 2019, 10:00AM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price_summary">

              <h4>Price Summary</h4>

              <div className="price_details">

                <div className="car_fee_wrapper">
                  <h6>Car rental fee</h6>
                  <aside> $250</aside>
                </div>

                <div className="discount">
                  <h6>Discount</h6>
                  <aside>-$140</aside>
                </div>

              </div>

              <div className="total_wrapper">
                <h5>Total Amount</h5>
                <aside>$210</aside>
              </div>

              <button className="booknow">Book Now</button>
            </div>
            <div className="termsAndConditions_wrapper">
            <input type="checkbox" />
              <p>{`I understand & agree with the ${"Terms & Conditions."}`}</p>
            </div>
           
          </div>
        </section>
      </>
    );
}
 
export default Booknow;