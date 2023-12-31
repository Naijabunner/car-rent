
import mercedes from "/src/assets/MainPicture.jpg"
import ferrari from "/src/assets/ferrari.jpg";

import { useContext, useState } from "react";
import { BookingContext } from "./App";
import { BookingDetails } from "./App";
const Booknow = () => {
    ///managing booked state
    const bookingContext = useContext(BookingContext)
 /////managing booking details
 const bookingDetails = useContext(BookingDetails)
//  all details from conttext
 const allDetails={
    location:bookingDetails.bookingDetails.location,
    PickupDate:bookingDetails.bookingDetails.PickupDate,
    ReturnDate:bookingDetails.bookingDetails.ReturnDate,
    PickupTime:bookingDetails.bookingDetails.PickupTime,
    CarType:bookingDetails.bookingDetails.CarType,
    ReturnTime:bookingDetails.bookingDetails.ReturnTime
 }



const handleSplit=(date)=>{
    const dateSplit = date.split('-')
    const splitMonths =  Number(dateSplit[1])
    const splitday =  Number(dateSplit[2])
    const splityear =  Number(dateSplit[0])
    return {splitMonths,splitday,splityear}
}

 const monthsName=(split)=>{
         const months=split == 1? "January":
    split == 2?"Febuary":
    split == 3?"March":
    split == 4?"April":
    split == 5?"May":
    split == 6?"June":
    split == 7?"July":
    split == 8?"August":
    split == 9?"September":
    split == 10?"October":
    split == 11?"November":
    split == 12?"December":
    "none"
    return months
    }
   
    const carData ={
        mercedes:{
            img:mercedes,
            price:2000,
            specialDiscount:140,
        }
    }
    
    

 
const Pickupmonth=monthsName(handleSplit(allDetails.PickupDate).splitMonths)
const Returnmonth=monthsName(handleSplit(allDetails.ReturnDate).splitMonths)
const Pickupday=handleSplit(allDetails.PickupDate).splitday
const Returnday=handleSplit(allDetails.ReturnDate).splitday
const Pickupyear=handleSplit(allDetails.PickupDate).splityear
const Returnyear=handleSplit(allDetails.ReturnDate).splityear

console.log(handleSplit(allDetails.PickupDate).splitday)
    return (
      <>
        <section className="booknow_sec">
        <div className="exit_popup"onClick={()=>{
                    bookingContext.bookedDispatch(false)}}>
                  <i className="fa-solid fa-x"
                  ></i>
                </div>
          <div className="booknow_wrapper">
            <div className="booknow_details">
              <div className="car_details">
                <h4>{allDetails.CarType}</h4>
                <img src={mercedes} alt="" />
                <div className="pickup_dropoff_wrapper">
                  <div className="pickup_wrapper">
                    <h4>Pick-up</h4>
                    <p>{Pickupmonth + " " +Pickupday + "," + " " + Pickupyear} , {" " +allDetails.PickupTime}</p>
                    <aside>Location: {allDetails.location}</aside>
                  </div>
                  <div className="dropoff_wrapper">
                    <h4>Drop-off</h4>
                    <p>{Returnmonth + " " +Returnday + "," + " " + Returnyear} , {" " +allDetails.ReturnTime}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="price_summary">

              <h4>Price Summary</h4>

              <div className="price_details">

                <div className="car_fee_wrapper">
                  <h6>Car rental fee</h6>
                  <aside> {`$${140}`}</aside>
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