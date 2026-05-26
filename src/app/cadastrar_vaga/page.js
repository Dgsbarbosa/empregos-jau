"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

import LocationFields from "./_components/LocationFields"

export default function AnunciarPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setErrorMessage("");
    const formData = new FormData(e.target);

    const titulo = formData.get("titulo");

    const slug = titulo
      .toLowerCase()
      .trim()
      .replaceAll(" ", "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w-]+/g, "");

    const dados = {
      titulo,
      slug,

      empresa: formData.get("empresa"),

      descricao: formData.get("descricao"),

      contato: formData.get("contato"),

      cidade: formData.get("cidade"),

      estado: formData.get("estado"),

      ativo: false,
    };

    const { error } = await supabase
      .from("vagas")
      .insert([dados]);

    setLoading(false);

    if (error) {

      setErrorMessage(
        "Não foi possível enviar sua vaga. Tente novamente."
      );

      toast.error(
        error.message || "Erro ao publicar vaga."
      );

      setLoading(false);

      return;
    }

    setSuccess(true);
    toast.success(
      "Vaga enviada com sucesso 🚀"
    );
    e.target.reset();
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="max-w-3xl mx-auto px-4 py-14">

        <div className="mb-10 text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full">
            Publicação Gratuita
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            Anuncie sua vaga
          </h1>

          <p className="mt-4 text-zinc-600 text-lg max-w-2xl mx-auto">
            Publique oportunidades gratuitamente e encontre candidatos mais rápido.
          </p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8">

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl">
              Vaga enviada para aprovação com sucesso 🚀
            </div>
          )} 
          {errorMessage && (
                      <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl">
                        Não foi possível enviar sua vaga. Tente novamente. 
                      </div>
                    )}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 text-sm font-semibold text-zinc-700">
                Título da vaga
              </label>

              <input
                name="titulo"
                required
                placeholder="Ex: Desenvolvedor Front-end"
                className="w-full h-14 px-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-zinc-700">
                Empresa
              </label>

              <input
                name="empresa"
                required
                placeholder="Nome da empresa"
                className="w-full h-14 px-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
              />
            </div>
            <LocationFields />
            <div>
              <label className="block mb-2 text-sm font-semibold text-zinc-700">
                Contato
              </label>

              <input
                name="contato"
                required
                placeholder="WhatsApp, e-mail ou link"
                className="w-full h-14 px-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-zinc-700">
                Descrição da vaga
              </label>

              <textarea
                name="descricao"
                required
                rows="7"
                placeholder="Descreva requisitos, benefícios, salário, modelo de trabalho e demais informações."
                className="w-full p-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400 outline-none resize-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg transition-all"
            >
              {loading ? "Publicando vaga..." : "Publicar vaga"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}