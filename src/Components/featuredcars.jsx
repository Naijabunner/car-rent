import Carscards from "./cars_cards"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// import jeep from "/src/assets/jeep.jpg";
import ferrari from "/src/assets/ferrari.jpg";
import fiat from "/src/assets/Fiat.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
const Featuredcars = () => {
    const featuredData=[
        {
            img: ferrari,
            name:"Jeep XD",
            seatno:"5",
            fuel:"Gasoline",
            type:"SUV",
            price:"200",
            id:"10"
        },
        {
            img:ferrari,
            name:"Ferrari Enzo",
            seatno:"2",
            fuel:"Eletric",
            type:"Sedan",
            price:"340",
            id:"20"
        },
        {
            img:fiat,
            name:"Fiat Cope",
            seatno:"4",
            fuel:"Gasoline",
            type:"Mini coupe",
            price:"167",
            id:"30"
        },
        {
            img:ferrari,
            name:"Jeep XD",
            seatno:"5",
            fuel:"Gasoline",
            type:"SUV",
            price:"200",
            id:"40"
        },
        {
            img:ferrari,
            name:"Ferrari Enzo",
            seatno:"2",
            fuel:"Eletric",
            type:"Sedan",
            price:"340",
            id:"50"
        }

    ]
    const[ size, newsize ]= useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    const reSize =()=>{
        newsize({
            width: window.innerWidth,
        height: window.innerHeight}
        )
    }
    useEffect(()=>{
    window.addEventListener("resize", reSize)
    }, [])
    console.log( size)
    const slideModerator = (action) => {
        if (action< 500) {
            return 50
        }
    }


    const mappedCard =<Swiper className="swiperfeatures"
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={(size.width< 500)?50
        :(size.width > 500 && size.width < 900)?200
        :(size.width > 900)?450
        :100}
    slidesPerView={size.width > 900 ?3:2}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >{featuredData.map((data)=>{
    console.log(data.id)
        return(
            <SwiperSlide key={data.id}>  <Carscards key={data.id} {...data} /></SwiperSlide>
           
        )
    })}
    </Swiper>
    return (  
        <>
        <div className="featuredcars_wrapper">
            <div className="featured_cars_header">
                <p>Our Featured Cars</p>
            </div>
        </div>
        {mappedCard}
      </>
    );
}
 
export default Featuredcars;