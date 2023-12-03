import Booknow from "./Booknowpop"
import Landingpage from "./pages/landing_page"
import React, { useEffect, useReducer, useState } from "react"

////Booking reducer state
const initialState = false
const bookingReducer=(state, action)=>{
  if (action) {
		return true
	}
}
export const BookingContext = React.createContext()
export const navContext = React.createContext()



function App() {
  const [booked, dispatch]= useReducer(bookingReducer, initialState)
  const [navOpen, setNavOpen]= useState(false)
 useEffect(()=>{
  console.log(navOpen)
 },[navOpen]) 
  return (
   <section className="app">
 <BookingContext.Provider
    value= {{bookedState: booked, bookedDispatch: dispatch}}>
 <navContext.Provider
    value= {{navOpen, setNavOpen}}>
      <Landingpage/>
      {booked && <Booknow/>}
    </navContext.Provider>
    </BookingContext.Provider>
    
   </section>
   

  
  )
}

export default App
