
import PageHeader from "@/components/ui/PageHeader";
import InfoCard from "@/components/ui/InfoCard";
import Adsense from "@/components/ads/Adsense";

export const metadata = {
  title: "Termos de Uso | Empregos Jaú",

  description:
    "Leia os termos de uso da plataforma Empregos Jaú.",
};

export default function TermosPage() {
  return (
    <main className="px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        <Adsense type="top" />

        <PageHeader
          title="Termos de Uso"
          subtitle="Regras e condições de utilização da plataforma."
        />

        <InfoCard>
          <div className="space-y-5 text-slate-700 leading-relaxed">

            <p>
              Ao utilizar o portal Empregos Jaú, o usuário concorda com os termos abaixo.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Publicação de vagas
            </h2>

            <p>
              Empresas são responsáveis pelas informações publicadas nos anúncios.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Moderação
            </h2>

            <p>
              O portal poderá remover vagas enganosas, fraudulentas ou inadequadas sem aviso prévio.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Responsabilidade
            </h2>

            <p>
              O Empregos Jaú não participa dos processos seletivos das empresas anunciantes.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Uso indevido
            </h2>

            <p>
              É proibido utilizar a plataforma para spam, golpes, conteúdo ilegal ou qualquer atividade maliciosa.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Alterações
            </h2>

            <p>
              Os termos poderão ser alterados a qualquer momento sem aviso prévio.
            </p>

          </div>
        </InfoCard>

        <Adsense type="footer" />

      </div>
    </main>
  );
}
