"use client";

import React, { useEffect, useState } from "react";
import CardTime from "./Card-time";

const Countdown = ({ targetDate }: { targetDate: string | number }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: -1, hours: -24, minutes: -2, seconds: -60 });
      }
    };

    countdown(); // Initial call to update the countdown immediately
    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex gap-4">
      <CardTime title="Hari" value={timeLeft.days}  />
      <CardTime title="Jam" value={timeLeft.hours}/>
      <CardTime title="Menit" value={timeLeft.minutes} />
      <CardTime title="Detik" value={timeLeft.seconds} />
    </div>
  );
};

export default Countdown;
