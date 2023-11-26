const Bookings = () => {
    return (
      <>
        <section className="booking_wrapper">
          <div className="booking_header_wrapper">
            <p>Book Now</p>
          </div>
          <div className="booking_form_wrapper">
            <form action="">
              <div className="first_input_wrapper">
                <div className="pickup_location">
                    <label>Pick Location</label>
                  <input type="text" placeholder="Pick Location" />
                </div>
                <div className="pickup_date">
                  <label>Pickup Date</label>
                  <input type="date" />
                </div>
                <div className="return_date">
                  <label>Return Date</label>
                  <input type="date" onChange={(e)=>console.log(e.target.value)} />
                </div>
              </div>
              <div className="second_input_wrapper">
                <div className="cartype">
                  <label>Car Type</label>
                  <select name="cars" id="cars">
                    <option value="">Select car</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="pickup_time">
                    <label>
                    Pickup Time
                    </label>
                    <input type="time" />
                </div>
                <div className="return_time">
                <label>
                Return Time
                    </label>
                    <input type="time" /></div>
                <div className="booknow_btn">
                  <button>Book Now</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
}
 
export default Bookings;