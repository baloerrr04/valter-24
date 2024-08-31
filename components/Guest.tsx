"use client";
import React from "react";
import Card from "./ui/Card";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { CanvasRevealEffect } from "./ui/Canvas-reveal-effect";
import { AnimatedTooltip } from "./ui/Animated-tooltip";
import { guestSocial, social, techStack } from "@/data/data";
import { motion } from "framer-motion";
import { fadeAnimation, fadeRight, techStackAnimation } from "@/lib/animation";

function Guest() {
  return (
    <section id="guest" className="w-full py-10 lg:py-20 ">
      {/* Subheading H1 */}
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-3xl text-center w-full mb-8">
        Bintang Tamu
      </h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <motion.div {...fadeAnimation} variants={fadeRight}>
          <TextGenerateEffect
            words="Sadam Permana W"
            className="text-center mt-5 lg:text-start text-[15px] md:text-lg lg:text-3xl font-bold block md:hidden"
          />
        </motion.div>
        <motion.div {...fadeAnimation} variants={fadeRight}>
            <p className="text-gray-300 text-center mb-3 lg:text-start text-sm md:text-md italic block md:hidden">
              Content Creator
            </p>
          </motion.div>
        <div className="w-full lg:w-1/3">
          <Card
            title="Lets connect!"
            icon={
              <img
                src="/sadam.jpg"
                className="object-contain overflow-hidden"
              />
            }
            socialIcons={guestSocial}
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
              words="Sadam Permana W"
              className="text-center lg:text-start text-[15px] md:text-md lg:text-2xl font-bold hidden md:block"
            />
          </motion.div>
          <motion.div {...fadeAnimation} variants={fadeRight}>
            <p className="text-gray-300 text-center lg:text-start text-sm md:text-md italic mt-2 hidden md:block">
              Content Creator
            </p>
          </motion.div>
          <motion.div {...fadeAnimation} variants={fadeRight}>
            <p className="text-gray-400 mt-4 text-[10px] lg:text-sm text-justify leading-relaxed hidden md:block">
              Sadam Permana adalah seorang konten kreator di TikTok yang sering membagikan pengalaman kuliah serta tips mengikuti lomba debat. Ia aktif berpartisipasi dalam berbagai kompetisi debat dan telah meraih beberapa prestasi, termasuk Juara 2 Debat Hukum Nasional Law Fair 2022 dan Juara 2 Lomba Debat APDN 2022. Kegiatan dan pencapaiannya ini menjadi inspirasi bagi banyak pengikutnya di media sosial.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Guest;
