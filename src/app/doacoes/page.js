
import Adsense from "@/components/ads/Adsense";
import InfoCard from "@/components/ui/InfoCard";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Apoie o projeto | Jaú Empregos",
  description:
    "Ajude a manter o portal gratuito para empresas e candidatos.",
};

export default function DoacoesPage() {
  return (
    <main className="px-4 ">
      <div className="max-w-5xl mx-auto space-y-8">

        <Adsense type="top" />

        <PageHeader
          title="Apoie o projeto"
          subtitle="Ajude a manter o portal gratuito para toda a região."
        />

        <InfoCard>
          <SectionTitle>
            Por que apoiar?
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Nosso objetivo é ajudar pessoas a encontrarem emprego gratuitamente.
            </p>

            <p>
              As doações ajudam a manter hospedagem, infraestrutura e melhorias do portal.
            </p>
          </div>
        </InfoCard>

        <InfoCard>
          <SectionTitle>
            PIX para doação
          </SectionTitle>

          <div className="space-y-3">
            <div className="rounded-xl bg-slate-300 p-4 font-mono text-sm break-all text-black">
              (14) 99603-1672
            </div>

            <p className="text-slate-600 text-sm">
              Qualquer valor já ajuda muito.
            </p>
          </div>
        </InfoCard>

        <Adsense type="footer" />

      </div>
    </main>
  );
}
