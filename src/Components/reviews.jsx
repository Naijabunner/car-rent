import Reviewcards from './reviewcard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperNavButtons from './swipervav';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviewpic02 from '/src/assets/reviewpic02.png';
import reviewpic01 from '/src/assets/reviewpic01.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Reviews = () => {
 
    const reviewData=[
        {
            img: reviewpic02,
            name:"Robert Fox",
            comment:"I rented a car for a one week trip from Carnet on the recommendation of my  friend. Actually, I am satisfied with them.",
            id:1
        },
        {
            img:reviewpic01,
            name:"Kristin watson",
            comment:"During my last trip, I used a Carent sport car . The car was completely clean and had enough gas",
            id:2
        },
        {
            img:reviewpic02,
            name:"Robert Fox",
            comment:"During my last trip, I used a Carent sport car . The car was completely clean and had enough gas",
            id:7
        },
        {
            img:reviewpic01,
            name:"Kristin watson",
            comment:"During my last trip, I used a Carent sport car . The car was completely clean and had enough gas",
            id:4
        }

    ]
    const mapreview =<div className="swiper_wrapper">
         <Swiper className='swiperreview'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
  >{reviewData.map((data)=>{
        return(
            <SwiperSlide key={data.id}>  <Reviewcards key={data.id} {...data} /></SwiperSlide>
           
        )
    })}
    <SwiperNavButtons/>
    </Swiper>
    
    </div>
   
    return ( <>
    <div className="review_wrapper">
        <div className="review_wrapper_header">
            <p>What Our Clients Say?</p>
        </div>
    {mapreview}
    </div>
    
    
    </> );
}
 
export default Reviews;