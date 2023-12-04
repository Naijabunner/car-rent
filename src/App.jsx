import Booknow from "./Booknowpop";
import Landingpage from "./pages/landing_page";
import React, { useReducer, useState } from "react";

////Booking reducer state
const initialState = false;
const bookingReducer = (state, action) => {
  if (action) {
    return true;
  }
};



export const BookingDetails = React.createContext();
export const BookingContext = React.createContext();
export const navContext = React.createContext();

function App() {
  const [booked, dispatch] = useReducer(bookingReducer, initialState);
  const [navOpen, setNavOpen] = useState(false);
  // Booking details
  const [bookingDetails, setBookingDetails] =useState({
    location:"",
    PickupDate:"",
    ReturnDate:"",
    PickupTime:"",
    CarType:"",
    ReturnTime:""
  })
  return (
    <section className="app">
      <BookingDetails.Provider value={{bookingDetails, setBookingDetails}}>
         <BookingContext.Provider
        value={{ bookedState: booked, bookedDispatch: dispatch }} >
        <navContext.Provider value={{ navOpen, setNavOpen }}>
          <Landingpage />
          {booked && <Booknow />}
        </navContext.Provider>
      </BookingContext.Provider>
      </BookingDetails.Provider>
     
    </section>
  );
}

export default App;
