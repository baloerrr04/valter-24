"use client";
import React from "react";
import Card from "./ui/Card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/Canvas-reveal-effect";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
import { social, techStack } from "@/data/data";
import { motion } from "framer-motion";
import { fadeAnimation, fadeRight, techStackAnimation } from "@/lib/animation";

function Guest() {
  return (
    <section
      id="guest"
      className="w-full py-10 lg:py-20 "
    >
      {/* Subheading H1 */}
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-3xl text-center w-full mb-12">
        Bintang Tamu
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
      <div className="w-full lg:w-1/3">
        <Card
          title="Lets connect!"
          icon={
            <img src="/sadam.jpg" className="object-cover overflow-hidden" />
          }
          socialIcons={social}
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className="flex flex-col w-full lg:w-2/3 px-8">
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <TextGenerateEffect
            words="SADAM"
            className="text-center lg:text-start text-[15px] md:text-xl lg:text-3xl font-bold"
          />
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <p className="text-gray-400 mt-4 text-xs lg:text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, at. Neque voluptate eius dolores sit magnam, expedita aliquam facilis inventore recusandae reprehenderit tenetur voluptatem amet ratione at culpa voluptates? Consequuntur.
          </p>
        </motion.div>
        <motion.div>
          <div className="mt-4 font-medium">
            <p className="text-gray-200">Prestasi</p>
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
                    {/* <img className="w-5" src={tech.image} /> */}
                    <p className="text-xs md:text-sm">{tech.name}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}

export default Guest;
