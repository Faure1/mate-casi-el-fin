import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay,Grid, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


export const Brands = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, ]}
          className="mySwiper"
        >
          <SwiperSlide className="d-flex justify-content-center"><div className="col-12"><a  href="#Adrián"><img alt="Adrian" src="./assets/Adrian-Paenza.png"></img></a></div></SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center align-items-center"><a  href="#Cabezón"><img alt="Cabezon" className="Cabezon" src="./assets/Cabezón.png" /></a></SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center"><a href="#Isaac"><img alt="Isaac" className="Cabezon" src="./assets/isaac.png" /></a></SwiperSlide>
          <SwiperSlide className="d-flex justify-content-center"><a  href="#Rene"><img alt="Rene" className="Cabezon" src="./assets/Rene.png" /></a></SwiperSlide>
        </Swiper>
      </>
    )
}
export default Brands;
