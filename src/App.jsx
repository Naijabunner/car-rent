import Booknow from "./Booknowpop"
import Landingpage from "./pages/landing_page"
import React, { useReducer } from "react"

const initialState = false
const bookingReducer=(state, action)=>{
  if (action) {
		return true
	}
}
bookingReducer()
export const BookingContext = React.createContext()
function App() {
  const [booked, dispatch]= useReducer(bookingReducer, initialState)
  console.log(booked)
  return (
   <section className="app">
 <BookingContext.Provider
    value= {{bookedState: booked, bookedDispatch: dispatch}}>
      <Landingpage/>
      {booked && <Booknow/>}
    </BookingContext.Provider>
    
   </section>
   

  
  )
}

export default App
