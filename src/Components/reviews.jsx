import Reviewcards from './reviewcard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Reviews = () => {
 
    const reviewData=[
        {
            img:"/src/assets/jeep.jpg",
            name:"Jeep XD",
            seatno:"5",
            fuel:"Gasoline",
            type:"SUV",
            price:"200",
            id:1
        },
        {
            img:"/src/assets/ferrari.jpg",
            name:"Ferrari Enzo",
            seatno:"2",
            fuel:"Eletric",
            type:"Sedan",
            price:"340",
            id:2
        }

    ]
    const mapreview =<Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >{reviewData.map((data)=>{
        return(
            <SwiperSlide>  <Carscards key={data.id} {...data} /></SwiperSlide>
           
        )
    })}
    </Swiper>
    return ( <>
    {mapreview}
    </> );
}
 
export default Reviews;