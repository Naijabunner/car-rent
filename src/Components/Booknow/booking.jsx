import { useContext, useState } from "react";
import { BookingContext } from "../../App";
import { BookingDetails } from "../../App";
const Bookings = () => {
 const bookingDetails = useContext(BookingDetails)
  const bookingContext = useContext(BookingContext)
//  /////hanling time calc
//  const timeHandler=(time)=>{
//   if (time >= 12) {
    
//   } else {
    
//   }
//  }
 //////onchange handler
  const handleOnchange =(e)=>{
    const name =e.target.name
    const value = e.target.value
    const updatedBookings ={...bookingDetails.bookingDetails, [name]:value}
    ////update booking details function from context
    bookingDetails.setBookingDetails(updatedBookings)
    console.log(typeof value)
  }
 //////onsubmit handler
  const handleSubmit =(e)=>{
      e.preventDefault();
      console.log("clic")
      bookingContext.bookedDispatch(true)}
 
  
    return (
      <>
        <section className="booking_wrapper">
          <div className="booking_header_wrapper">
            <p>Book Now</p>
          </div>
          <div className="booking_form_wrapper">
            <form onSubmit={handleSubmit}>
              <div className="first_input_wrapper">
                <div className="pickup_location">
                    <label>Pick Location</label>
                  <input type="text" placeholder="Pick Location" name="location"required onChange={handleOnchange} />
                </div>
                <div className="pickup_date">
                  <label>Pickup Date</label>
                  <input type="date" name="PickupDate" onChange={handleOnchange} required />
                </div>
                <div className="return_date">
                  <label>Return Date</label>
                  <input type="date" name="ReturnDate" onChange={handleOnchange} required />
                </div>
              </div>
              <div className="second_input_wrapper">
                <div className="cartype">
                  <label>Car Type</label>
                  <select name="CarType" id="cars" onChange={handleOnchange} required>
                    <option value="">Select car</option>
                    <option value="volvo" name="CarType" >Volvo</option>
                    <option value="saab" name="CarType" >Saab</option>
                    <option value="mercedes" name="CarType" >Mercedes</option>
                    <option value="audi" name="CarType" >Audi</option>
                  </select>
                </div>
                <div className="pickup_time">
                    <label>
                    Pickup Time
                    </label>
                    <input type="time" name="PickupTime" onChange={handleOnchange} required/>
                </div>
                <div className="return_time">
                <label>
                Return Time
                    </label>
                    <input type="time" name="ReturnTime" onChange={handleOnchange} required/>
                    </div>
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