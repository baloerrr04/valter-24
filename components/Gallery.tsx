"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { fadeAnimation, fadeRight } from "@/lib/animation";
import { documentations } from "@/data/data";

const Gallery = () => {
  // Inline styles for Swiper
  const swiperStyles = {
    width: '100%',
    paddingTop: '50px',
    paddingBottom: '50px',
  };

  const swiperSlideStyles = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '300px',
    height: '300px',
    boxShadow: '5px 5px 0px 0px rgba(109, 40, 217, 1)',
    border: '1px solid black',
    borderRadius: '10px',
  };

  const swiperSlideImgStyles = {
    display: 'block',
    width: '100%',
    borderRadius: '10px',
  };

  return (
    <motion.div
      className="w-full py-10 lg:py-20"
      id="dokumentasi"
      {...fadeAnimation}
      variants={fadeRight}
    >
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-3xl text-center">
        Dokumentasi
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        loop={true}
        style={swiperStyles} // Apply inline styles to Swiper
      >
        {documentations.map((documentation, index) => (
          <SwiperSlide
            key={index}
            style={swiperSlideStyles} // Apply inline styles to SwiperSlide
          >
            <img
              style={swiperSlideImgStyles} // Apply inline styles to img
              src={documentation.src}
              alt={`Documentation ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Gallery;
