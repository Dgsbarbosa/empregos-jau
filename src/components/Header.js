"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-425 mx-auto px-4">

        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/"
            className="flex items-baseline gap-1 text-2xl font-black text-blue-600 tracking-tight shrink-0"
          >
            <span>Jaú</span>

            <span className=" font-light text-lg">
              EMPREGOS
            </span>
          </a>

          {/* MENU DESKTOP */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-semibold text-gray-600">

              <li>
                <a
                  href="/"
                  className="hover:text-blue-600 transition-colors"
                >
                  INÍCIO
                </a>
              </li>

              <li>
                <a
                  href="/vagas"
                  className="hover:text-blue-600 transition-colors"
                >
                  VAGAS
                </a>
              </li>

              <li>
                <a
                  href="/anunciar"
                  className="hover:text-blue-600 transition-colors"
                >
                  ANUNCIAR
                </a>
              </li>

              <li>
                <a
                  href="/sobre"
                  className="hover:text-blue-600 transition-colors"
                >
                  SOBRE
                </a>
              </li>

              <li>
                <a
                  href="/contato"
                  className="hover:text-blue-600 transition-colors"
                >
                  CONTATO
                </a>
              </li>

              <li>
                <a
                  href="/doacoes"
                  className="hover:text-blue-600 transition-colors"
                >
                  APOIAR
                </a>
              </li>

              <li>
                <a
                  href="/privacidade"
                  className="hover:text-blue-600 transition-colors"
                >
                  PRIVACIDADE
                </a>
              </li>

              <li>
                <a
                  href="/termos"
                  className="hover:text-blue-600 transition-colors"
                >
                  TERMOS
                </a>
              </li>

            </ul>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* BOTÃO DESKTOP */}
            <a
              href="/cadastrar_vaga"
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-colors"
            >
              Publicar Vaga
            </a>

            {/* MENU MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700"
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">

          <div className="px-4 py-4 space-y-3">

            <a
              href="/"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              INÍCIO
            </a>

            <a
              href="/vagas"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              VAGAS
            </a>

            <a
              href="/anunciar"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              ANUNCIAR
            </a>

            <a
              href="/sobre"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              SOBRE
            </a>

            <a
              href="/contato"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              CONTATO
            </a>

            <a
              href="/doacoes"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              APOIAR O PROJETO
            </a>

            <a
              href="/privacidade"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
               PRIVACIDADE
            </a>

            <a
              href="/termos"
              className="block text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              TERMOS
            </a>

            <div className="pt-3">
              <a
                href="/anunciar"
                className="flex justify-center items-center w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Publicar Vaga
              </a>
            </div>

          </div>

        </div>
      )}

    </header>
  );
}