"use client";

import React, { useEffect, useState } from "react";

const CardTime = ({ title, value }: { title: string; value: number }) => {
  return (
    <div className="relative inline-flex h-14 w-full md:w-32 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none shadow-[5px_5px_0px_0px_rgba(109,40,217)] ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#dbeafe_50%,#3b82f6_100%)]" />
      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-semibold text-white backdrop-blur-3xl gap-2`}
      >
        <span className="flex flex-col items-center justify-center">
          <span>{value}</span>
          <span className="text-xs">{title}</span>
        </span>
      </span>
    </div>
  );
};

export default CardTime;
