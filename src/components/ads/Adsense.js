"use client";

import { useEffect, useState } from "react";
import ads from "@/data/ads.json";

export default function AdsBanner({ type = "top" }) {
  const [current, setCurrent] = useState(0);

  const banners = ads[type] || [];

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (!banners.length) return null;

  const banner = banners[current];

  let height = 0;

if (type === "top") {
  height = 90; // px
}else {
  height = 192;
}



  return (
    <div className="w-full h flex justify-center" style={{ height }}>
      <a
        href={banner.link}
        className="w-full   overflow-hidden rounded-xl border bg-slate-100"
      >
        <img
          src={banner.image}
          alt={banner.alt}
          className="w-full h-auto object-cover"
        />
      </a>
    </div>
  );
}