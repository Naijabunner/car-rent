
const Booknow = () => {
    return (  <>
    <div className="booknow_wrapper">
        <div className="booknow_details">
            <div className="car_details">
                <img src="" alt="" />
            <div className="pickup_dropoff_wrapper">
                <div className="pickup_wrapper">
                    <h4></h4>
                    <p></p>
                    <aside></aside>
                </div>
                <div className="dropoff_wrapper">
                    <h4></h4>
                    <p></p>
                    <aside></aside>
                </div>
            </div>
            </div>
        </div>
        <div className="price_summary">
            <h4>Price Summary</h4>
            <div className="price_details">
                <div className="car_fee_wrapper">
                 <p>Car rental fee</p>
            <aside> $250</aside>
                </div>
            <div className="discount">
                <p>Discount</p>
                <aside>-$140</aside>
            </div>
            </div>
            <div className="total_wrapper">
                <h5>Total Amount</h5>
                <aside>$210</aside>
            </div>
            <button className="booknow"
            >
                Book Now
            </button>
        </div>
        <div className="termsAndConditions_wrapper">
            <p>I understand & agree with the</p>
            <aside>Terms & Conditions.</aside>
        </div>
        <input type="checkbox" />
    </div>
    </>);
}
 
export default Booknow;