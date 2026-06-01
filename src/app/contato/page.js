
import Adsense from "@/components/ads/Adsense";
import InfoCard from "@/components/ui/InfoCard";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Contato | Jaú Empregos",
  description:
    "Entre em contato com a equipe do portal.",
};

export default function ContatoPage() {
  return (
    <main className="px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        <Adsense type="top" />

        <PageHeader
          title="Contato"
          subtitle="Fale conosco para dúvidas, sugestões ou parcerias."
        />

        <InfoCard>
          <SectionTitle>
            Informações
          </SectionTitle>

          <div className="space-y-4 text-slate-700">
            <p>Email:  <a href="mailto:jau.empregos@gmail.com" className="text-blue-700 hover:underline">jau.empregos@gmail.com</a>
</p>
            
            <p>Atendimento: Segunda a Sexta</p>

          </div>
        </InfoCard>

        <InfoCard>
          <SectionTitle>
            Parcerias
          </SectionTitle>

          <p className="text-slate-700 leading-relaxed">
            Entre em contato para anúncios, parcerias regionais e divulgação empresarial.
          </p>
        </InfoCard>

        <Adsense type="footer" />

      </div>
    </main>
  );
}

