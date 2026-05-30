import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import SideAds from "@/components/SideAds";
import BannerCarousel from "@/components/BannerLocal";
import { Toaster } from "sonner";
import Script from "next/script";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jauempregos.vercel.app"),

  title: "Jaú Empregos - Vagas de Emprego em Jaú/SP",

  description:
    "Encontre vagas de emprego atualizadas em Jaú/SP. Empresas locais publicam vagas gratuitamente.",

  keywords: [
    "empregos jau",
    "vagas jau",
    "vagas de emprego jau",
    "emprego em jau",
    "trabalho jau",
  ],

  openGraph: {
    title: "Empregos Jaú - Vagas de Emprego em Jaú/SP",

    description:
      "Encontre vagas de emprego atualizadas em Jaú/SP. Empresas locais publicam vagas gratuitamente.",

    url: "https://jauempregos.vercel.app",

    siteName: "Empregos Jaú",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Empregos Jaú",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Empregos Jaú - Vagas de Emprego em Jaú/SP",

    description:
      "Encontre vagas de emprego atualizadas em Jaú/SP. Empresas locais publicam vagas gratuitamente.",

    images: ["/images/logo.png"],
  },

  other: {
    "google-adsense-account": "ca-pub-8734148830861215",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8734148830861215"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">



        <Header />
        <div className="mt-6">
          <BannerCarousel />
        </div>
        <div className="w-full">


          <div className="max-w-425 mx-auto flex gap-6 px-4">

            {/* LEFT */}
            <aside className="hidden xl:block w-75 shrink-0">
              <div className="sticky top-24">
                <SideAds side="left" useAdsense={false} />
              </div>
            </aside>

            {/* CENTER */}
            <main className="flex-1 min-w-0">
              {children}
            </main>

            {/* RIGHT */}
            <aside className="hidden xl:block w-75 shrink-0">
              <div className="sticky top-24">
                <SideAds side="right" useAdsense={false} />
              </div>
            </aside>

          </div>

        </div>
        <Toaster
          position="top-right"
          richColors
        />

     



        <Footer />
      </body>
    </html>
  );
}
