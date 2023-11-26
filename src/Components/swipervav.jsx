import { useSwiper } from "swiper/react";

const SwiperNavButtons = () => {
    const swiper =useSwiper()
    console.log(swiper)
    return ( <>
    <div className="swiper-nav-buttons">
    <i className="fa-solid fa-angle-left" onClick={()=>{swiper.slidePrev()
    console.log("click")}}></i>
    <i className="fa-solid fa-angle-right" onClick={()=>{swiper.slideNext()
    console.log("click")}}></i>
    </div>
    </> );
}
 
export default SwiperNavButtons;