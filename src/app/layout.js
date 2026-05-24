import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Empregos Jaú - Vagas de Emprego em Jaú/SP",
  description:
    "Encontre vagas de emprego atualizadas em Jaú/SP. Empresas locais publicam vagas gratuitamente.",
  keywords: [
    "empregos jau",
    "vagas jau",
    "vagas de emprego jau",
    "emprego em jau",
    "trabalho jau",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-bt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">


        <Header />
        {children}

      </body>
    </html>
  );
}
