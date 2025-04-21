import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ImageSlider = () => {
  const images = [

    'https://shopfelicity.in/wp-content/uploads/2020/10/ROYAL-BASMATI-RICE.jpg',
    'https://static.vecteezy.com/system/resources/previews/039/623/475/non_2x/ai-generated-fresh-purple-onion-slice-a-healthy-vegetarian-ingredient-generated-by-ai-free-photo.jpg',
    'https://www.tastingtable.com/img/gallery/why-are-red-onions-purple/l-intro-1644158494.jpg',
    '/images/11.jpg',
    '/images/22.avif',
    '/images/11.png',
    'https://s3-us-west-2.amazonaws.com/issuewireassets/primg/47228/nuts-dry-fruits211214769.jpeg',
    'https://stopfoodwaste.ie/wp-content/uploads/2023/08/Banners-For-SFW-Website-1024x577.png',
  ];

  return (
    <div className="image-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,  // Image speed (3000ms per image)
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="slide-container">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rotating-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
