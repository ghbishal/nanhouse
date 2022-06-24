import "./testimonial.scss";

import reviews from "../../database/reviews";

import {Pagination, Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-container">
      <div className="container">
        <h1>Our Backbone</h1>
        <h2>What Our Customers Say</h2>
        <Swiper
          className="container-items"
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{clickable: true}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {reviews.map(({id, img, name, review}) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="avatar">
                  <img src={img} />
                </div>
                <h1 className="name">{name}</h1>
                <h2 className="review">{review}</h2>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
