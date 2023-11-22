const Bookings = () => {
    return ( <>
    <section className="booking_wrapper">
        <div className="booking_header_wrapper">
            <p>Book Now</p>
        </div>
        <div className="booking_form_wrapper">
            <form action="">
            <div className="first_input_wrapper">
                <div className="pickup_location">
                    Pick Location
                </div>
                <div className="pickup_date">
                    Pickup Date
                </div>
                <div className="return_date">
                    Return Date
                </div>
                </div>
            <div className="second_input_wrapper">
                <div className="pickup_location">
                    Car Type
                </div>
                <div className="pickup_date">
                     Pickup Time
                </div>
                <div className="return_date">
                    Return TIme
                </div>
                <div className="booknow_btn">
                   <button>
                    Book Now
                   </button>
                </div>

                </div>
            </form>
           
        </div>
    </section>
    </> );
}
 
export default Bookings;