"use client";

import { useEffect, useState } from "react";

const banners = [
  "https://res.cloudinary.com/dakbhkmmy/image/upload/v1779647950/job_website/banners/6_u99wvm_pvn3mf.png",
  "https://res.cloudinary.com/dakbhkmmy/image/upload/v1779647943/job_website/banners/5_dbr1qo_zibt0q.png",
  "https://res.cloudinary.com/dakbhkmmy/image/upload/v1779647941/job_website/banners/4_t0f6cb_empcya.png"
];

export default function BannerCarousel() {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="w-full relative overflow-hidden rounded-3xl shadow-xl">

      <img
        src={banners[index]}
        alt="Banner"
        className="w-full h-auto object-cover transition-all duration-500"
      />

    </div>

  );
}