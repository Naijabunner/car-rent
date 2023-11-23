import Carscards from "./cars_cards"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Featuredcars = () => {
    const featuredData=[
        {
            img:"/src/assets/jeep.jpg",
            name:"Jeep XD",
            seatno:"5",
            fuel:"Gasoline",
            type:"SUV",
            price:"200",
            id:"10"
        },
        {
            img:"/src/assets/ferrari.jpg",
            name:"Ferrari Enzo",
            seatno:"2",
            fuel:"Eletric",
            type:"Sedan",
            price:"340",
            id:"20"
        },
        {
            img:"/src/assets/fiat.jpg",
            name:"Fiat Cope",
            seatno:"4",
            fuel:"Gasoline",
            type:"Mini coupe",
            price:"167",
            id:"30"
        },
        {
            img:"/src/assets/jeep.jpg",
            name:"Jeep XD",
            seatno:"5",
            fuel:"Gasoline",
            type:"SUV",
            price:"200",
            id:"40"
        },
        {
            img:"/src/assets/ferrari.jpg",
            name:"Ferrari Enzo",
            seatno:"2",
            fuel:"Eletric",
            type:"Sedan",
            price:"340",
            id:"50"
        }

    ]
    const mappedCard =<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
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
        {mappedCard}
      </>
    );
}
 
export default Featuredcars;