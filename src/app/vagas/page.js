import { supabase } from "@/lib/supabase";
import JobCard from "@/components/JobCard";
import AdsBanner from "@/components/ads/Adsense";

export const revalidate = 600;

// Função auxiliar para agrupar as datas amigavelmente
function formatarGrupoData(dataString) {
  const dataVaga = new Date(dataString);
  const hoje = new Date();
  const ontem = new Date();
  ontem.setDate(hoje.getDate() - 1);

  const stringVaga = dataVaga.toLocaleDateString("pt-BR");
  const stringHoje = hoje.toLocaleDateString("pt-BR");
  const stringOntem = ontem.toLocaleDateString("pt-BR");

  if (stringVaga === stringHoje) return "Hoje";
  if (stringVaga === stringOntem) return "Ontem";

  return dataVaga.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
}

export default async function Home() {
  // Busca todas as vagas ativas ordenadas pelas mais recentes primeiro
  const { data: todasVagas } = await supabase
    .from("vagas")
    .select("*")
    .eq("ativo", true)
    .order("created_at", { ascending: false });

  // 1. Separa as vagas que são DESTAQUE
  const vagasDestaque = todasVagas?.filter(vaga => vaga.destaque) || [];

  // 2. Separa as vagas NORMAIS (não destaque)
  const vagasNormais = todasVagas?.filter(vaga => !vaga.destaque) || [];

  // 3. Agrupa APENAS as vagas normais por data
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
      <main className="px-4 ">


        <div className="max-w-5xl mx-auto">
          <AdsBanner type="top" />

          <section className="mt-8">

            <h1 className="text-4xl text-black font-black tracking-tight">
              Vagas de Emprego em Jaú/SP e região
            </h1>
            <p className="text-slate-600 mt-3">
              Divulgamos GRATUITAMENTE vagas de emprego em Jaú e região.
            </p>
            <p className="text-slate-600 mt-3">
              Quer publicar uma vaga? Clique <a href="/anunciar" className="text-blue-600 font-bold hover:underline">aqui</a> e saiba como.
            </p>
          </section>

          {/* SEÇÃO 1: VAGAS EM DESTAQUE (Aparece apenas se houver alguma) */}
          {vagasDestaque.length > 0 && (
            <section className="mt-12 mb-12 space-y-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-black text-amber-600 uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
                  ⭐ Vagas em Destaque
                </h2>
                <div className="w-full h-px bg-amber-200" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                {vagasDestaque.map((vaga, index) => (
                  <div key={vaga.id}>

                    <JobCard vaga={vaga} />

                    {(index + 1) % 8 === 0 && (
                      <AdsBanner type="middle" />
                    )}

                  </div>
                ))}
              </div>
            </section>
          )}
          <AdsBanner type="middle" />

          {/* SEÇÃO 2: ÚLTIMAS VAGAS DIVIDIDAS POR DIA */}
          <section className="mt-12 mb-12 space-y-10">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-wider whitespace-nowrap">
                Vagas Recentes
              </h2>
              <div className="w-full h-px bg-slate-200" />
            </div>

            {Object.entries(vagasAgrupadasPorData).map(([data, listaDeVagas]) => (
              <div key={data} className="space-y-4">
                {/* Subtítulo com o Dia */}
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide">
                  {data}
                </h3>

                {/* Lista de Vagas comuns daquele dia específico */}
                <div className="space-y-4">
                  {listaDeVagas.map((vaga) => (
                    <JobCard key={vaga.id} vaga={vaga} />
                  ))}
                </div>
              </div>
            ))}
          </section>

          <div className="text-center text-black mb-12 text-2xl"><h4>Você chegou ao fim .</h4></div>
          <AdsBanner type="footer" />


        </div>
      </main>
    </div>
  );
}
