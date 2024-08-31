"use client";

import React from "react";
import { motion } from "framer-motion";

const CardTime = ({
  title,
  value,
  onClick,
}: {
  title: string;
  value: number;
  onClick?: () => void;
}) => {
  return (
    <motion.div
      whileTap={{ 
        boxShadow: "0px 0px 0px 0px rgba(109,40,217,0.2)", // "Close" the shadow
      }}
      initial={{ boxShadow: "5px 5px 0px 0px rgba(109,40,217)" }} // Initial shadow
      onClick={onClick} // Add click handler if needed
      className="relative inline-flex h-14 w-[75px] sm:h-16 sm:w-48 md:w-32 mt-6 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none cursor-pointer"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#dbeafe_50%,#3b82f6_100%)]" />
      <span
        className={`relative inline-flex h-full w-full items-center justify-center rounded-lg
             bg-slate-950 px-5 sm:px-7 text-xs sm:text-sm md:text-base font-semibold text-white backdrop-blur-3xl gap-2`}
      >
        <span className="flex flex-col items-center justify-center">
          <span className="text-[15px] sm:text-xl md:text-2xl">{value}</span>
          <span className="text-xs sm:text-sm">{title}</span>
        </span>
      </span>
    </motion.div>
  );
};

export default CardTime;
