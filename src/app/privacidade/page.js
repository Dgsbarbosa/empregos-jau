
import PageHeader from "@/components/ui/PageHeader";
import InfoCard from "@/components/ui/InfoCard";
import Adsense from "@/components/ads/Adsense";

export const metadata = {
  title: "Política de Privacidade | Empregos Jaú",

  description:
    "Leia a política de privacidade do portal Empregos Jaú.",
};

export default function PrivacidadePage() {
  return (
    <main className="px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        <Adsense type="top" />

        <PageHeader
          title="Política de Privacidade"
          subtitle="Entenda como tratamos informações e dados dos usuários."
        />

        <InfoCard>
          <div className="space-y-5 text-slate-700 leading-relaxed">

            <p>
              O portal Empregos Jaú respeita sua privacidade e protege os dados dos usuários.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Informações coletadas
            </h2>

            <p>
              Podemos coletar informações fornecidas em formulários, anúncios de vagas e contatos realizados pela plataforma.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Uso das informações
            </h2>

            <p>
              Os dados são utilizados para funcionamento da plataforma, publicação de vagas e melhoria da experiência do usuário.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Cookies
            </h2>

            <p>
              O site pode utilizar cookies para personalização de conteúdo, análise de tráfego e exibição de anúncios.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Google AdSense
            </h2>

            <p>
              O Google pode utilizar cookies para exibir anúncios personalizados aos usuários.
            </p>

            <h2 className="text-xl font-bold text-slate-900">
              Alterações
            </h2>

            <p>
              Esta política poderá ser alterada a qualquer momento sem aviso prévio.
            </p>

          </div>
        </InfoCard>

        <Adsense type="footer" />

      </div>
    </main>
  );
}
