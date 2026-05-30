"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import sideBanners from "@/data/sideBanners.json";

export default function SideAds({
  side = "left",
  useAdsense = false,
}) {

  // PEGA BANNERS DO LADO
  const banners = sideBanners[side] || [];

  const [bannerAtual, setBannerAtual] = useState(0);

  // CARROSSEL
  useEffect(() => {

    if (!banners.length) return;

    const interval = setInterval(() => {

      setBannerAtual((prev) =>
        prev === banners.length - 1
          ? 0
          : prev + 1
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [side]);

  // RESETA AO TROCAR LADO
useEffect(() => {

  setBannerAtual(0);

}, [side]);
  // EVITA ERRO
  if (!banners.length) return null;

  return (
    <div>

      {useAdsense ? (

        <div className="w-75 h-150 rounded-2xl overflow-hidden shadow-xl bg-slate-100 mt-5">

          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "300px",
              height: "600px",
            }}
            data-ad-client="ca-pub-XXXXXXXX"
            data-ad-slot="XXXXXXXX"
            data-ad-format="auto"
          />

        </div>

      ) : (

        <Link
          href={banners[bannerAtual].link}
          target="_blank"
          className="group block"
        >

          <div className="relative w-75 h-150 rounded-2xl overflow-hidden shadow-xl">

            <img
              src={banners[bannerAtual].image}
              alt={banners[bannerAtual].alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

          </div>

        </Link>

      )}

    </div>
  );
}