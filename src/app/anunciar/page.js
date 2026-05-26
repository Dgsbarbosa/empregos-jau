import Adsense from "@/components/ads/Adsense";
import BannerCarousel from "@/components/BannerLocal";
import SideAds from "@/components/SideAds";

import InfoCard from "@/components/ui/InfoCard";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Anuncie conosco | Jaú Empregos",
  description:
    "Divulgue sua empresa, produto ou serviço no portal Jaú Empregos.",
};

export default function AnunciarPage() {
  return (
    <main className="px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-8">

    

        <PageHeader
          title="Anuncie conosco"
          subtitle="Divulgue sua empresa, marca ou serviço para milhares de pessoas da região."
        />

        {/* COMO FUNCIONA */}
        <InfoCard>
          <SectionTitle>
            Como funciona?
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              Empresas podem anunciar banners publicitários dentro do portal Jaú Empregos.
            </p>

            <p>
              Os anúncios aparecem em áreas estratégicas do site com grande volume de visualizações.
            </p>

            <p>
              Seu banner pode divulgar:
            </p>

            <ul className="space-y-2 pl-5">

              <li>• Empresas</li>

              <li>• Lojas</li>

              <li>• Serviços</li>

              <li>• Cursos</li>

              <li>• Eventos</li>

              <li>• Produtos</li>

              <li>• Marcas locais</li>

            </ul>

          </div>
        </InfoCard>


        {/* FORMATOS */}
        <InfoCard>
          <SectionTitle>
            Onde os anúncios aparecem?
          </SectionTitle>

          <div className="space-y-10 text-slate-700 leading-relaxed">

            {/* TOPO */}
            <div>

              <h3 className="text-xl font-black text-slate-800 mb-4">
                Banner Principal
              </h3>

              <p className="mb-4">
                Seu anúncio pode aparecer no topo do portal em formato rotativo,
                com alta visibilidade para visitantes da região.
              </p>

         

            </div>

            {/* ENTRE VAGAS */}
            <div>

              <h3 className="text-xl font-black text-slate-800 mb-4">
                Banner entre vagas
              </h3>

              <p className="mb-4">
                Os banners também podem aparecer entre as vagas durante a navegação,
                aumentando ainda mais a visualização da sua marca.
              </p>

            

            </div>
            <div>

              <h3 className="text-xl font-black text-slate-800 mb-4">
                Nas laterais
              </h3>

              <p className="mb-4">
                Os banners também podem aparecer nas laterais durante a navegação,
                aumentando ainda mais a visualização da sua marca.
              </p>

              

            </div>

          </div>
        </InfoCard>

        {/* BENEFÍCIOS */}
        <InfoCard>
          <SectionTitle>
            Por que anunciar conosco?
          </SectionTitle>

          <div className="space-y-4 text-slate-700 leading-relaxed">

            <p>
              O Jaú Empregos recebe diariamente visitantes procurando vagas,
              empresas e oportunidades na região.
            </p>

            <p>
              Isso transforma o portal em um excelente espaço para divulgação
              de negócios locais.
            </p>

            <p>
              Seu banner ficará visível para milhares de pessoas interessadas
              em Jaú/SP e região.
            </p>

          </div>
        </InfoCard>

      

        {/* CONTATO */}
        <InfoCard>
          <SectionTitle>
            Solicite um orçamento
          </SectionTitle>

          <div className="space-y-4 text-slate-700">

            <p>
              Entre em contato para anunciar sua empresa no portal.
            </p>

            <div className="space-y-2">

              <p>
                Email: <a href="mailto:jau.empregos@gmail.com" className="text-blue-700 hover:underline">jau.empregos@gmail.com</a>
              </p>

              <p>
                WhatsApp: (14) 99603-1672
              </p>

            </div>

            <a
              href="https://wa.me/5514996031672"
              target="_blank"
              className="
                inline-flex
                items-center
                justify-center
                rounded-xl
                bg-green-600
                hover:bg-green-700
                px-6
                py-3
                text-white
                font-semibold
                transition-colors
              "
            >
              Falar no WhatsApp
            </a>

          </div>
        </InfoCard>


      </div>
    </main>
  );
}