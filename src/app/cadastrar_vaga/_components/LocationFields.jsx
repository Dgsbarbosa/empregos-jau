"use client";

import { todasCidades } from "@/data/cidades";

export default function LocationFields() {

  const cidades = todasCidades;

  return (
    <div className="grid md:grid-cols-2 gap-5">

      {/* ESTADO */}
      <div>

        <label className="block mb-2 text-sm font-semibold text-zinc-700">
          Estado
        </label>

        <input
          name="estado"
          value="SP"
          readOnly
          className="w-full h-14 px-4 rounded-2xl border border-zinc-300 bg-zinc-100 text-zinc-900 outline-none"
        />

      </div>

      {/* CIDADE */}
      <div>

        <label className="block mb-2 text-sm font-semibold text-zinc-700">
          Cidade
        </label>

        <select
          name="cidade"
          required
          defaultValue="Jaú"
          className="w-full h-14 px-4 rounded-2xl border border-zinc-300 bg-white text-zinc-900 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
        >

          <option value="">
            Selecione a cidade
          </option>

          {cidades.map((cidade) => (
            <option
              key={cidade}
              value={cidade}
            >
              {cidade}
            </option>
          ))}

        </select>

      </div>

    </div>
  );
}