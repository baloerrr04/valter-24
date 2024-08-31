"use client";
import React from "react";
import Card from "./ui/Card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/Canvas-reveal-effect";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
import { social, techStack } from "@/data/data";
import { motion } from "framer-motion";
import { fadeAnimation, fadeRight, techStackAnimation } from "@/lib/animation";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import VideoCard from "./ui/VideoCard";

function About() {
  return (
    <section
      id="about"
      className="w-full py-10 lg:py-20 flex flex-col lg:flex-col justify-between lg:items-center"
    >
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-3xl text-center">
        Tentang
      </h1>
      <div className="flex flex-col w-full lg:w-2/3 px-8">
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-400 mt-6 text-xs lg:text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            ratione alias aliquam harum voluptate, porro assumenda rem, possimus
            aliquid qui soluta reprehenderit! Voluptas recusandae deleniti
            quibusdam odio saepe labore dolores!
          </p>
        </motion.div>
        {/* <motion.div>
          <div className="mt-4 font-medium">
            <p className="text-gray-200">Tech stack :</p>
            <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-start w-full lg:w-4/5 gap-x-4">
              {techStack.map((tech, index) => {
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    variants={techStackAnimation}
                    className="px-4 py-2 rounded-xl mt-2 flex flex-row items-center justify-center gap-2 border border-slate-700 cursor-pointer hover:border-blue-600 transition-all duration-200"
                    style={{
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    }}
                  >
                    <img className="w-5" src={tech.image} />
                    <p className="text-xs md:text-sm">{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div> */}
      </div>
      <div className="w-full lg:w-1/3 mt-6">
       <VideoCard
        videoSrc="/teaser.mov"
       ></VideoCard>
      </div>

      <motion.a
          href="/Muhammad Akbar Adityah-resume.pdf"
          download={"Muhammad akbar adityah-resume"}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 1.3, delay: 1.5 }}
          className="mt-4 w-full flex justify-center"
        >
          <MagicButton
            title="Buku Panduan"
            icon={<FaLocationArrow />}
            position="right"
          />
        </motion.a>
    </section>
  );
}

export default About;
