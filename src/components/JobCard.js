export default function JobCard({ vaga }) {
  return (
    <a
      href={`/vaga/${vaga.slug}`}
      className={`block p-5 rounded-2xl border transition hover:shadow-md ${
        vaga.destaque
          ? "bg-amber-50 border-amber-300"
          : "bg-white border-slate-400"
      }`}
    >
      <div className="flex justify-between gap-4">

        <div>

          {vaga.destaque && (
            <span className="bg-amber-500 text-white text-[10px] px-2 py-1 rounded-md uppercase font-black">
              Destaque
            </span>
          )}

          <h2 className="text-lg text-black font-bold mt-2">
            {vaga.titulo}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {vaga.empresa} • {vaga.cidade}/{vaga.estado}
          </p>

          <p className="text-sm text-slate-600 mt-3 line-clamp-2">
            {vaga.descricao}
          </p>

        </div>

        <div>
          <div className="bg-slate-900 hover:bg-slate-800 hover:-translate-0.5 text-white text-sm font-bold px-4 py-2 rounded-xl whitespace-nowrap">
            Ver vaga
          </div>
        </div>

      </div>
    </a>
  );
}