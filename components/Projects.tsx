"use client";
import React, { useState, useMemo } from "react";
import { Tabs } from "./ui/Tabs";
import ProjectCards from "./ui/Project-Cards";
import { projects, imageProject } from "@/data/data";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeAnimation, fadeUp } from "@/lib/animation";

const VideoProject = dynamic(() => import("./ui/VideoProject"), { ssr: false });

const Projects = () => {
  const tabs = useMemo(
    () => [
      {
        title: "Lomba",
        value: "lomba",
        content: (
          <div className="gap-y-30 gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 bg-transparent backdrop-blur-xl justify-center">
            {projects
              .filter((proj) => proj.type === "lomba")
              .map((proj, index) => {
                return (
                  <div className="flex justify-center" key={index}>
                    <ProjectCards
                      title={proj.title}
                      desc={proj.desc}
                      image={proj.image}
                      linkGithub={proj.linkGithub}
                      linkGuide={proj.linkGuide}
                      guideName={proj.guideName}
                    />
                  </div>
                );
              })}
          </div>
        ),
      },
      {
        title: "Pelatihan",
        value: "pelatihan",
        content: (
          <div className="gap-y-30 gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 bg-transparent backdrop-blur-xl justify-center">
            {projects
              .filter((proj) => proj.type === "pelatihan")
              .map((proj, index) => {
                return (
                  <div className="flex justify-center" key={index}>
                    <ProjectCards
                      title={proj.title}
                      desc={proj.desc}
                      image={proj.image}
                      linkGithub={proj.linkGithub}
                      linkGuide={proj.linkGuide}
                      guideName={proj.guideName}
                    />
                  </div>
                );
              })}
          </div>
        ),
      },
      {
        title: "Seminar",
        value: "seminar",
        content: (
          <div className="gap-y-30 gap-10 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 bg-transparent backdrop-blur-xl justify-center">
            {projects
              .filter((proj) => proj.type === "seminar")
              .map((proj, index) => {
                return (
                  <div className="flex justify-center" key={index}>
                    <ProjectCards
                      title={proj.title}
                      desc={proj.desc}
                      image={proj.image}
                      linkGithub={proj.linkGithub}
                      linkGuide={proj.linkGuide}
                      guideName={proj.guideName}
                    />
                  </div>
                );
              })}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div id="project" className="py-10 md:py-20 pb-24 w-full">
      <h1 className="text-white font-bold text-xl md:text-3xl lg:text-3xl text-center">
        Kegiatan
      </h1>
      <motion.div
        {...fadeAnimation}
        variants={fadeUp}
        className="h-fit relative z-10 flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-12"
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </div>
  );
};

export default Projects;
