import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import { headers } from 'next/headers'

import CallAction from "./_components/CallAction";

// Reaproveita a busca para evitar requisições duplicadas (Padrão Next.js 15)
async function getVaga(slug) {
  const { data } = await supabase
    .from("vagas")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  return data;
}

export async function generateMetadata({ params }, parent) {
  const resolvedParams = await params;
  const vaga = await getVaga(resolvedParams.slug);

  if (!vaga) {
    return {
      title: "Vaga não encontrada",
      description: "Essa vaga não está mais disponível ou não existe.",
    };
  }

  // Define o domínio base (mude para o seu domínio de produção)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://empregosjau.com.br';

  return {
    title: `${vaga.titulo} em ${vaga.cidade}/${vaga.estado} | Empregos Jaú`,
    description: vaga.descricao.slice(0, 160),
    // O Next.js usa o objeto 'alternates' para definir a tag <link rel="canonical">
    alternates: {
      canonical: `${baseUrl}/vagas/${resolvedParams.slug}`,
    },
    // Se precisar da URL especificamente para as tags Open Graph (Facebook/LinkedIn)
    openGraph: {
      url: `${baseUrl}/vagas/${resolvedParams.slug}`,
    }
  };
}


export default async function VagaPage({ params }) {
  const resolvedParams = await params;
  const vaga = await getVaga(resolvedParams.slug);

  if (!vaga) {
    notFound();
  }

  // Identifica automaticamente se o contato é Link/WhatsApp ou E-mail para colocar o prefixo correto
  const dynamicHref = vaga.contato.includes("@")
    ? `mailto:${vaga.contato}`
    : vaga.contato.startsWith("http")
      ? vaga.contato
      : `https://wa.me{vaga.contato.replace(/\D/g, "")}`;

  const dataPublicacao = new Date(vaga.created_at).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      {/* Dados Estruturados para o Google Jobs SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: vaga.titulo,
            description: vaga.descricao,
            datePosted: vaga.created_at,
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: vaga.empresa,
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: vaga.cidade || "Jaú",
                addressRegion: vaga.estado || "SP",
                addressCountry: "BR",
              },
            },
          }),
        }}
      />

      {/* Bloco AdSense Superior */}
      <div className="mb-6">
        <div className="bg-gray-100 border border-gray-200 h-22.5 rounded-2xl flex items-center justify-center text-xs text-gray-400 tracking-wider">
          PUBLICIDADE
        </div>
      </div>

      {/* Card Principal da Vaga */}
      <article className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">

        {/* Informações de Cabeçalho */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-sm text-gray-600">
          <span className="font-bold text-gray-900">
            Mensagem do Empregos Jaú
          </span>
          <span className="text-gray-500">
            Cadastrado em: {dataPublicacao} {/* ou "07/01/2025" */}
          </span>
        </div>

        {/* Título da Vaga */}
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">
          {vaga.titulo}
        </h1>

        {/* Divisor Visual */}
        <div className="h-px bg-gray-200 my-6" />

        {/* Corpo da Descrição */}
        <div className="text-gray-700 space-y-4 leading-relaxed text-base whitespace-pre-line">
          {vaga.descricao}
        </div>

        {/* Divisor Visual Inferior */}
        <div className="h-px bg-gray-100 my-6" />

        {/* Informações de Contato e Localização */}
        <div className="space-y-2 text-base text-gray-700">
          <div>
            <span className="font-bold text-gray-900">Contato:</span> {vaga.contato}
          </div>
          <div>
            <span className="font-bold text-gray-900">Vaga em</span> {vaga.cidade || "Jaú"} - {vaga.estado || "SP"}
          </div>
        </div>

      </article>

      <CallAction />



      {/* Bloco AdSense Inferior */}
      <div className="mt-8">
        <div className="bg-gray-100 border border-gray-200 h-62.5 rounded-2xl flex items-center justify-center text-xs text-gray-400 tracking-wider">
          PUBLICIDADE
        </div>
      </div>
    </main>
  );
}
