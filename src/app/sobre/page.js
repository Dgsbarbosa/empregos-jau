import Adsense from "@/components/ads/Adsense";
import InfoCard from "@/components/ui/InfoCard";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Sobre | Jaú Empregos",
  description:
    "Saiba como funciona o portal Jaú Empregos e como publicar vagas gratuitamente.",
};

export default function SobrePage() {
  return (
    <main className="px-4 ">
      <div className="max-w-5xl mx-auto space-y-8">

        <Adsense type="top" />

        <PageHeader
          title="Sobre o Jaú Empregos"
          subtitle="Divulgamos GRATUITAMENTE vagas de emprego em Jaú/SP e região."
        />

        {/* COMO CADASTRAR */}
        <InfoCard>
          <SectionTitle>
            Como cadastrar uma vaga?
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              O cadastro de vagas no Jaú Empregos é totalmente GRATUITO.
            </p>

            <div>
              <h3 className="font-black text-slate-800 mb-3">
                SIGA OS SEGUINTES PASSOS:
              </h3>

              <ol className="space-y-3 list-decimal pl-5">
                <li>
                  Clique em <strong>“Anunciar Vaga”</strong> no site.
                </li>

                <li>
                  Preencha corretamente os dados da vaga seguindo as regras abaixo.
                </li>

                <li>
                  Nossa equipe analisará o anúncio antes da publicação.
                </li>

                <li>
                  Após aprovação, a vaga será publicada automaticamente no portal.
                </li>

                <li>
                  Os anúncios permanecem ativos por até 30 dias.
                </li>
              </ol>
            </div>

          </div>
        </InfoCard>

        {/* REGRAS */}
        <InfoCard>
          <SectionTitle>
            Regras para publicação
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <ol className="space-y-3 list-decimal pl-5">

              <li>
                O anúncio deve pertencer à própria empresa anunciante ou empresa responsável pelo recrutamento.
              </li>

              <li>
                O anúncio deve estar de acordo com a legislação trabalhista brasileira.
              </li>

              <li>
                Não publicamos vagas que solicitem envio de fotos, vídeos ou informações inadequadas.
              </li>

              <li>
                Links externos devem ser legítimos e seguros.
              </li>

              <li>
                Vagas enganosas, duplicadas ou suspeitas poderão ser removidas sem aviso prévio.
              </li>

            </ol>

            <p className="text-sm text-slate-500">
              As regras poderão ser alteradas a qualquer momento para manter a qualidade e segurança da plataforma.
            </p>

          </div>
        </InfoCard>

        {/* DADOS OBRIGATÓRIOS */}
        <InfoCard>
          <SectionTitle>
            Quais dados são obrigatórios?
          </SectionTitle>

          <div className="space-y-3 text-slate-700">

            <p>• Título da vaga (cargo)</p>

            <p>• Nome da empresa</p>
            

            <p>• Cidade da vaga</p>
            <p>• Contato ou link para inscrição</p>
            <p>• Descrição da vaga</p>

          </div>
        </InfoCard>

        {/* SOBRE */}
        <InfoCard>
          <SectionTitle>
            Sobre o portal
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              O Jaú Empregos foi criado com o objetivo de facilitar o acesso às oportunidades de emprego na região.
            </p>

            <p>
              Nosso portal é simples, rápido e gratuito tanto para candidatos quanto para empresas.
            </p>

            <p>
              As empresas cadastram as vagas diretamente na plataforma e nossa equipe realiza a validação antes da publicação.
            </p>

            <p>
              Cada anúncio possui instruções próprias para candidatura, normalmente por e-mail, WhatsApp ou site da empresa.
            </p>

            <p>
              O Jaú Empregos não participa dos processos seletivos das empresas anunciantes.
            </p>

          </div>
        </InfoCard>

        <Adsense type="footer" />

      </div>
    </main>
  );
}