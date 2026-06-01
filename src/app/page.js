import { supabase } from "@/lib/supabase";
import JobCard from "@/components/JobCard";
import Adsense  from "@/components/ads/Adsense";
import AdsBanner from "@/components/ads/Adsense";

// Função auxiliar com fuso horário de Brasília fixo
function formatarGrupoData(dataString) {
  const dataVaga = new Date(dataString);
  const hoje = new Date();
  const ontem = new Date();
  ontem.setDate(hoje.getDate() - 1);

  // Força o fuso horário correto para evitar problemas no servidor Node.js
  const opcoes = { timeZone: "America/Sao_Paulo" };
  const stringVaga = dataVaga.toLocaleDateString("pt-BR", opcoes);
  const stringHoje = hoje.toLocaleDateString("pt-BR", opcoes);
  const stringOntem = ontem.toLocaleDateString("pt-BR", opcoes);

  if (stringVaga === stringHoje) return "Hoje";
  if (stringVaga === stringOntem) return "Ontem";

  return dataVaga.toLocaleDateString("pt-BR", { ...opcoes, day: "numeric", month: "long" });
}

export default async function Home() {
  const { data: todasVagas } = await supabase
    .from("vagas")
    .select("*")
    .eq("ativo", true)
    .order("created_at", { ascending: false });

  const vagasDestaque = todasVagas?.filter(vaga => vaga.destaque) || [];
  
  // Pega apenas as primeiras 10 vagas normais para a Home
  const vagasNormais = todasVagas?.filter(vaga => !vaga.destaque).slice(0, 10) || [];

  const vagasAgrupadasPorData = {};

  vagasNormais.forEach((vaga) => {
    const dataGrupo = formatarGrupoData(vaga.created_at);
    if (!vagasAgrupadasPorData[dataGrupo]) {
      vagasAgrupadasPorData[dataGrupo] = [];
    }
    vagasAgrupadasPorData[dataGrupo].push(vaga);
  });

  return (
    <div>
      <main className="px-4">
        <AdsBanner type="top" />

        <div className="max-w-225 mx-auto">
          <section className="mt-8">
            <h1 className="text-4xl text-black font-black tracking-tight">
              Vagas de Emprego em Jaú/SP e região
            </h1>
            <p className="text-slate-600 mt-3">
              Divulgamos GRATUITAMENTE vagas de emprego em Jaú e região.
            </p>
            <p className="text-slate-600 mt-3">
              Quer publicar uma vaga? Clique <a href="/anunciar" className="text-blue-600 font-bold hover:underline">aqui</a> e anuncie gratuitamente.
            </p>
          </section>

          {vagasDestaque.length > 0 && (
            <section className="mt-12 space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-black text-amber-600 uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
                  ⭐ Vagas em Destaque
                </h2>
                <div className="w-full h-px bg-amber-200" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {vagasDestaque.map((vaga) => (
                  <JobCard key={vaga.id} vaga={vaga} />
                ))}
              </div>
            </section>
          )}

          <div className="mt-3.5">
            <AdsBanner type="middle" />
          </div>

          <section className="mt-12 space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider whitespace-nowrap">
                Anúncios Recentes
              </h2>
              <div className="w-full h-px bg-slate-200" />
            </div>

            {Object.entries(vagasAgrupadasPorData).map(([data, listaDeVagas]) => (
              <div key={data} className="space-y-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                  {data}
                </h3>

                <div className="space-y-4">
                  {listaDeVagas.map((vaga) => (
                    <JobCard key={vaga.id} vaga={vaga} />
                  ))}
                </div>
              </div>
            ))}

            <a href="/vagas" className="text-blue-800 block mt-4">Ver todas</a>
          </section>
        </div>

        <div className="mt-3.5">
          <AdsBanner type="footer" />
        </div>
      </main>
    </div>
  );
}
