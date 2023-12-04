import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
    const swiper =useSwiper()
    
    return ( <>
    <div className="swiper-nav-buttons">
    <i className="fa-solid fa-angle-left" onClick={()=>{swiper.slidePrev()
    }}></i>
    <i className="fa-solid fa-angle-right" onClick={()=>{swiper.slideNext()
    }}></i>
    </div>
    </> );
}
 
export default SwiperNavButtons;