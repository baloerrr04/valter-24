"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const ProjectCards = ({
  title,
  desc,
  image,
  linkGithub,
  linkGuide,
  guideName
}: {
  title: string;
  desc: string;
  image: string;
  linkGithub?: string;
  linkGuide: string,
  guideName: string,
}) => (
  <HoverBorderGradient
    as={"div"}
    containerClassName="rounded-3xl"
    className="bg-slate-900 border border-slate-800 backdrop-blur-xl p-4 overflow-hidden w-64 flex flex-col  md:w-[300px] md:h-[420px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
    style={{
      background: "rgb(4,7,29)",
      backgroundColor:
        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
    }}
  >
    <div className="relative h-52 w-full overflow-hidden shadow-lg shadow-slate-800 bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img
        src={image}
        alt="card-image"
        className="object-contain w-full h-full p-2"
      />
    </div>
    <div className="py-5">
      <h5 className="block mb-2 font-sans text-lg text-white antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
      <p className="block font-sans text-sm w-full antialiased text-justify text-slate-300 font-light leading-relaxed text-inherit">
        {desc}
      </p>
    </div>
    <div className="py-2 pt-0 flex flex-col gap-2 items-center">
      <Link href={""}
        className="align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg bg-[#24292e] text-white shadow-[5px_5px_0px_0px_rgba(109,40,217)] shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none cursor-pointer"
        type="button"
        onClick={() => window.open(linkGithub)}
        // disabled={!linkGithub}
      >
        Daftar
      </Link>
      <a
       href={linkGuide}
       download={guideName}
        className="align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg bg-primary-ten text-black-100 shadow-[5px_5px_0px_0px_rgba(109,40,217)] shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none cursor-pointer"
        type="button"
        // disabled={!linkGithub}
      >
        Download Buku Panduan
      </a>
      
    </div>
  </HoverBorderGradient>

  
);

export default ProjectCards;
