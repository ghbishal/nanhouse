import "./aboutus.scss";

// From react Reveal
import {Zoom, Fade} from "react-reveal";

// From Materail UI
import LocalDiningIcon from "@mui/icons-material/LocalDining";

import NANHOUSE from "../../assets/nanhouse.jpg";
import SETMENU from "../../assets/setPic.jpg";
import CurrencyYenRoundedIcon from "@mui/icons-material/CurrencyYenRounded";

// import Swiper core and required modules
import {Autoplay, Pagination, EffectCoverflow} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    image: require("../../assets/sidemenu/GapaoRiceSet.jpg"),
    name: "ガパオライス セット",
    description: "サラダ + ガパオライス + ソフトドリンク",
    price: 1090,
  },

  {
    image: require("../../assets/sidemenu/HCNset.jpg"),
    name: "ハニーチーズナン セット",
    description:
      "サラダ + ハニーチーズナン + チョイスカレー1種類 + ソフトドリンク ",
    price: 1080,
  },

  {
    image: require("../../assets/sidemenu/briyaniset.jpg"),
    name: "チキン/マトンビリヤニ",
    description: "サラダ + チキン/マトンビリヤニ + ソフトドリンク",
    price: 1290,
  },

  {
    image: require("../../assets/sidemenu/Butterchickenset.jpg"),
    name: "バターチキンセット",
    description:
      "サラダ + ナン（Or）ライス + バターチキンカレー + ソフトドリンク ",
    price: 1080,
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
            {data.map(({image, name, description, price}, index) => {
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
                        {price}
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
