import "./aboutus.scss";

// From react Reveal
import {Zoom, Fade} from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import NANHOUSE from "../../assets/nanhouse.jpg";
import SETMENU from "../../assets/setPic.jpg";
import CurrencyYenRoundedIcon from "@mui/icons-material/CurrencyYenRounded";

import PARALLAX01 from "../../assets//bgimg/parallax01.jpg";

// import Swiper core and required modules
import {Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: SETMENU,
    name: "1",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: NANHOUSE,
    name: "2",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: SETMENU,
    name: "3",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: NANHOUSE,
    name: "4",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: SETMENU,
    name: "5",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: NANHOUSE,
    name: "6",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: SETMENU,
    name: "7",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: NANHOUSE,
    name: "8",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
  {
    image: SETMENU,
    name: "9",
    description: "Lorem ipsum dolor sit amet consectetur",
  },

  {
    image: NANHOUSE,
    name: "10",
    description: "Lorem ipsum dolor sit amet consectetur",
  },
];

const Aboutus = () => {
  return (
    <section id="about" className="aboutUs">
      <div className="ourStory">
        <Zoom delay={40} duration={2000}>
          <h1>Welcome to NanHouse</h1>
          <h2>SINCE 2009</h2>
          <div className="divider">
            <span className="left"></span>
            <LocalDiningIcon className="spoonFork" />
            <span className="right"></span>
          </div>
        </Zoom>

        <div className="story">
          <Fade left big delay={100} duration={2000}>
            <div className="storyLine">
              <p>
                NanHouse is a genuine Indian restaurant made by an Indian chef
                with a tandoor ordered from India. Especially the tandoori
                chicken baked in tandoor is excellent !! In addition to
                delivery, NanHouse also offers party menus. You can enjoy the
                taste of NanHouse not only in this shop but also anywhere.
              </p>
            </div>
          </Fade>
          <Fade right big delay={100} duration={2000}>
            <div className="storyName">
              <img src={NANHOUSE} alt="" />
            </div>
          </Fade>
        </div>
      </div>

      <div className="specialMenu">
        <div className="specialMenu-container">
          <div className="menuHeader">
            <Zoom delay={40} duration={2000}>
              <h1>Special Menu</h1>
              <h2>Indulge in the flavours of the Indian kitchen.</h2>
              <div className="divider">
                <span className="left"></span>
                <LocalDiningIcon className="spoonFork" />
                <span className="right"></span>
              </div>
            </Zoom>
          </div>

          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // spaceBetween={100}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 40,
              stretch: 0,
              depth: 100,
              modifier: 4,
              slideShadows: true,
            }}
            pagination={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="menu-container"
          >
            {data.map(({image, name, description}, index) => {
              return (
                <SwiperSlide key={index} className="container">
                  <div className="menu">
                    <div className="food-photo">
                      <img src={image} />
                    </div>
                    <div className="foodLable">
                      <h5 className="food-name">{name}</h5>
                      <div className="divider">
                        <span className="left"></span>
                        <LocalDiningIcon className="spoonFork" />
                        <span className="right"></span>
                      </div>
                      <small>{description} </small>

                      <h1>
                        <CurrencyYenRoundedIcon className="yen" />
                        500
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
