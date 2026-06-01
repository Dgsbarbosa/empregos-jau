"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import banners from "@/data/caroussel.json";

export default function BannerLocal() {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef();
  const lastTimeRef = useRef(0);

  // AUTO PLAY
  useEffect(() => {
    if (!banners.length) return;

    let mounted = true;

    const animate = (time) => {
      if (!mounted) return;

      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;

      if (delta >= 4000) {
        setCurrent((prev) =>
          prev >= banners.length - 1 ? 0 : prev + 1
        );
        lastTimeRef.current = time;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      mounted = false;
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // SEM BANNERS
  if (!banners.length) {
    return <div className="w-full h-40 bg-zinc-200 rounded-3xl" />;
  }

  return (
    <div className="relative w-full overflow-hidden shadow-xl mb-5 ">
      
      {/* IMAGEM ESTRUTURAL: Dá a altura real ao contêiner baseado no primeiro banner */}
      <img 
        src={banners[0].image} 
        alt="" 
        className="w-full h-auto opacity-0 pointer-events-none" 
      />

      {/* CONTEÚDO REAL DO CARROSSEL */}
      {banners.map((banner, index) => (
        <Link
          key={index}
          href={banner.link}
          target="_blank"
          className={`absolute inset-0 transition-opacity duration-700 ${
            current === index
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent z-10 pointer-events-none" />

      {/* DOTS */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
