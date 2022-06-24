import "./home.scss";

// Pictures
import CURRY from "../../assets/bgimg/curry.jpg";
import MIDDLEOPEN from "../../assets/bgimg/currynanset.jpg";
import FULLSET from "../../assets/bgimg/fullset.jpg";
import ICHIGAYA from "../../assets/bgimg/ichigaya.jpg";
import TANDOORI from "../../assets/bgimg/ichigayakabab.jpg";
import NANCURRY from "../../assets/bgimg/nancurry.jpg";
import SET from "../../assets/bgimg/set.jpg";
import LOGO from "../../assets/nanhouselogo.png";
import IMG from "../../assets/whitelogo.png";
import MUMMY from "../../assets/mummy.png";
import MSET from "../../assets/setPic.jpg";

// import Swiper core and required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const imgData = [MIDDLEOPEN, FULLSET, ICHIGAYA, TANDOORI, NANCURRY, SET, CURRY];

const Home = () => {
  return (
    <section id="home" className="home">
      <Swiper
        className="imgSwiper"
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img src={imgData[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[2]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[3]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[4]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[5]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgData[6]} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="home-logo">
        <div className="logo">
          <img src={MUMMY} alt="" />
        </div>
        <h1>
          Indian Curry Restaurant <br />
          NanHouse
        </h1>
      </div>
    </section>
  );
};

export default Home;
