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


        {/* TABELA DE PREÇOS */}
        <InfoCard>
          <SectionTitle>
            Tabela de preços
          </SectionTitle>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 mt-6">

            {/* VAGA DESTAQUE */}
            <div className="rounded-3xl border border-yellow-300 bg-linear-to-b from-yellow-50 to-white p-6 shadow-sm">
              <div className="mb-4">
                <span className="bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS VENDIDO
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-2">
                ⭐ Vaga em Destaque
              </h3>

              <p className="text-slate-600 mb-5">
                Sua vaga aparece em destaque no portal com visual premium.
              </p>

              <ul className="space-y-2 text-slate-700 mb-6">
                <li>✔ Topo das vagas</li>
                <li>✔ Card premium</li>
                <li>✔ Destaque visual</li>
              </ul>

              <div className="space-y-2 text-yellow-600">
                <div className="flex justify-between">
                  <span>7 dias</span>
                  <strong>R$ 19,90</strong>
                </div>

                <div className="flex justify-between">
                  <span>15 dias</span>
                  <strong>R$ 29,90</strong>
                </div>

                <div className="flex justify-between">
                  <span>30 dias</span>
                  <strong>R$ 39,90</strong>
                </div>
              </div>
            </div>

            {/* TOPO */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                📢 Banner Principal
              </h3>

              <p className="text-slate-600 mb-5">
                Banner rotativo no topo do portal.
              </p>

              <ul className="space-y-2 text-slate-700 mb-6">
                <li>✔ Alta visibilidade</li>
                <li>✔ Todas as páginas</li>
                <li>✔ Público regional</li>
              </ul>

              <div className="space-y-2 text-blue-900">
                <div className="flex justify-between">
                  <span>Rotativo</span>
                  <strong>R$ 149/mês</strong>
                </div>

                <div className="flex justify-between">
                  <span>Exclusivo</span>
                  <strong>R$ 249/mês</strong>
                </div>
              </div>
            </div>

            {/* LATERAL */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                🧱 Banner Lateral
              </h3>

              <p className="text-slate-600 mb-5">
                Banner fixo/sticky durante a navegação.
              </p>

              <ul className="space-y-2 text-slate-700 mb-6">
                <li>✔ Formato 300x600</li>
                <li>✔ Alta permanência</li>
                <li>✔ Excelente visibilidade</li>
              </ul>

              <div className="space-y-2 text-blue-900">
                <div className="flex justify-between">
                  <span>1 lado</span>
                  <strong>R$ 97/mês</strong>
                </div>

                <div className="flex justify-between">
                  <span>2 lados</span>
                  <strong>R$ 169/mês</strong>
                </div>
              </div>
            </div>

            {/* 600x90 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                📏 Banner 600x90
              </h3>

              <p className="text-slate-600 mb-5">
                Banner exibido entre as vagas.
              </p>

              <div className="space-y-2 text-blue-900">
                <div className="flex justify-between">
                  <span>Mensal</span>
                  <strong>R$ 79</strong>
                </div>

                <div className="flex justify-between">
                  <span>Semanal</span>
                  <strong>R$ 39</strong>
                </div>
              </div>
            </div>

            {/* 600x192 */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                🖼️ Banner 600x192
              </h3>

              <p className="text-slate-600 mb-5">
                Banner horizontal premium.
              </p>

              <div className="flex justify-between mt-6 text-blue-900">
                <span>Mensal</span>
                <strong>R$ 119</strong>
              </div>
            </div>

          </div>

        </InfoCard>

        {/* PACOTES */}
        <InfoCard>
          <SectionTitle>
            Pacotes promocionais
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 mt-6">

            {/* LOCAL */}
            <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-2xl font-black text-slate-900 mb-4">
                🚀 Pacote Empresa Local
              </h3>

              <ul className="space-y-3 text-slate-700 mb-6">
                <li>✔ 1 vaga destaque</li>
                <li>✔ Banner 600x90</li>
                <li>✔ Divulgação por 30 dias</li>
              </ul>

              <div className="text-4xl font-black text-blue-700">
                R$ 97
              </div>
            </div>

            {/* PREMIUM */}
            <div className="rounded-3xl border border-purple-300 bg-gradient-to-b from-purple-50 to-white p-6">
              <div className="mb-4">
                <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PREMIUM
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4">
                🔥 Pacote Premium
              </h3>

              <ul className="space-y-3 text-slate-700 mb-6">
                <li>✔ Vaga destaque</li>
                <li>✔ Banner topo</li>
                <li>✔ Banner lateral</li>
                <li>✔ Divulgação por 30 dias</li>
              </ul>

              <div className="text-4xl font-black text-purple-700">
                R$ 297
              </div>
            </div>

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