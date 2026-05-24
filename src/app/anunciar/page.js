"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AnunciarPage() {

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);

    const titulo = formData.get("titulo");

    const slug = titulo
      .toLowerCase()
      .replaceAll(" ", "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const dados = {
      titulo,
      slug,
      empresa: formData.get("empresa"),
      descricao: formData.get("descricao"),
      contato: formData.get("contato"),
    };

    const { error } = await supabase
      .from("vagas")
      .insert([dados]);

    setLoading(false);

    if (!error) {
      alert("Vaga enviada com sucesso!");
      e.target.reset();
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">

      <h1 className="text-4xl font-black">
        Anunciar vaga grátis
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-4"
      >

        <input
          name="titulo"
          required
          placeholder="Título da vaga"
          className="w-full p-4 rounded-xl border"
        />

        <input
          name="empresa"
          required
          placeholder="Nome da empresa"
          className="w-full p-4 rounded-xl border"
        />

        <input
          name="contato"
          required
          placeholder="WhatsApp ou link"
          className="w-full p-4 rounded-xl border"
        />

        <textarea
          name="descricao"
          required
          rows="6"
          placeholder="Descrição"
          className="w-full p-4 rounded-xl border"
        />

        <button
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl"
        >
          {loading ? "Enviando..." : "Publicar vaga"}
        </button>

      </form>

    </main>
  );
}