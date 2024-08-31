"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../public/style.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { fadeAnimation, fadeRight } from "@/lib/animation";
import { documentations } from "@/data/data";

const Gallery = () => {
  return (
    <motion.div className="w-full py-10 lg:py-20" id="dokumentasi" {...fadeAnimation} variants={fadeRight}>
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
        className="mySwiper w-full pt-[50px] pb-[50px]"
      >
        {documentations.map((documentation, index) => (
        <SwiperSlide key={index} className="bg-center bg-cover w-72 h-72">
          <img
            className="block w-full"
            src={documentation.src}
          />
        </SwiperSlide>
        ))}
        
      </Swiper>
    </motion.div>
  );
};

export default Gallery;
