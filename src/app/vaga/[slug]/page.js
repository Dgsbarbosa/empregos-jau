import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

import CallAction from "./_components/CallAction";
import AdsBanner from "@/components/ads/Adsense";

export const revalidate = 300;
const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jauempregos.vercel.app"
).replace(/\/$/, "");

// Busca da vaga
async function getVaga(slug) {
  const { data } = await supabase
    .from("vagas")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  return data;
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const resolvedParams = await params;

  const vaga = await getVaga(resolvedParams.slug);

  if (!vaga) {
    return {
      title: "Vaga não encontrada | Empregos Jaú",
      description: "Essa vaga não está mais disponível.",
    };
  }


  const cidade = vaga.cidade || "Jaú";
  const estado = vaga.estado || "SP";

  return {
    title: `${vaga.titulo} - ${cidade}/${estado} | Vaga Atualizada`,

    description:
      vaga.descricao?.slice(0, 160) ||
      `Confira a vaga de ${vaga.titulo} em ${cidade}/${estado}.`,

    alternates: {
      canonical: `${baseUrl}/vaga/${resolvedParams.slug}`,
    },

    openGraph: {
      title: `${vaga.titulo} | Empregos Jaú`,
      description: vaga.descricao?.slice(0, 160),
      url: `${baseUrl}/vaga/${resolvedParams.slug}`,
      siteName: "Empregos Jaú",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Empregos Jaú",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${vaga.titulo} | Empregos Jaú`,
      description: vaga.descricao?.slice(0, 160),
      images: ["/images/logo.png"],
    },
  };
}

function formatContato(contato) {
  if (!contato) {
    return {
      href: null,
      text: "",
    };
  }

  const value = contato.trim();

  // EMAIL
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(value)) {
    return {
      href: `mailto:${value}`,
      text: value,
      label: "Envie um e-mail"
    };
  }

  // LINK
  const isLink =
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("www.");

  if (isLink) {
    const cleanLink = value.replace(/\s+/g, "");

    return {
      href: cleanLink.startsWith("http")
        ? cleanLink
        : `https://${cleanLink}`,
      text: cleanLink,
      label: "Acesse a pagina da vaga"
    };
  }

  // TELEFONE
  const numbers = value.replace(/\D/g, "");

  // se tiver pelo menos 10 números considera telefone
  if (numbers.length >= 10) {
    return {
      href: `https://wa.me/55${numbers}`,
      text: value,
      label: value
    };
  }

  // TEXTO COMUM
  return {
    href: null,
    text: value,
  };
}

export default async function VagaPage({ params }) {
  const resolvedParams = await params;

  const vaga = await getVaga(resolvedParams.slug);
  if (!vaga || !vaga.ativo) {
    notFound();
  }
  const isDestaque = vaga.destaque;



  const cidade = vaga.cidade || "Jaú";
  const estado = vaga.estado || "SP";
  const contato = formatContato(vaga.contato);
  const dataPublicacao = new Date(
    vaga.created_at
  ).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });



  return (
    <main className="min-h-screen bg-zinc-50">

      <section className="max-w-4xl mx-auto px-4 ">

        {/* Publicidade Topo */}
        <AdsBanner type="top" />

        {/* Card da vaga */}
        <article
          className={`
            rounded-3xl overflow-hidden transition-all mt-4
                ${isDestaque
              ? "bg-linear-to-b from-yellow-50 to-white border border-yellow-300 shadow-lg shadow-yellow-100"
              : "bg-white border border-zinc-200 shadow-sm"
            }
              `}
        >

          {/* Topo */}
          <div className="p-6 md:p-8 border-b border-zinc-100">
            {isDestaque && (
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 bg-linear-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow">
                  👑 Vaga em Destaque
                </span>
              </div>
            )}
            <div className="flex flex-wrap items-center gap-3 mb-5">

              <span className="bg-blue-50 text-blue-700 border border-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full">
                Nova oportunidade
              </span>

              <span className="text-sm text-zinc-500">
                Publicado em {dataPublicacao}
              </span>

            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 leading-tight">
              {vaga.titulo}
            </h1>

            <div className="mt-5 flex flex-wrap gap-3">

              <div className="bg-zinc-300 text-zinc-700 px-4 py-2 rounded-2xl text-sm font-medium">
                {vaga.empresa}
              </div>

              <div className="bg-zinc-300 text-zinc-700 px-4 py-2 rounded-2xl text-sm font-medium">
                {cidade} - {estado}
              </div>

            </div>

          </div>

          {/* Conteúdo */}
          <div className="p-6 md:p-8">

            <div className="mb-8">
              <h2 className="text-lg font-bold text-zinc-900 mb-4">
                Descrição da vaga
              </h2>

              <div className="text-zinc-700 leading-8 whitespace-pre-line text-[16px]">
                {vaga.descricao}
              </div>
            </div>

            {/* Contato */}
            <div className="border-t border-zinc-100 pt-6">

              <h2 className="text-lg font-bold text-zinc-900 mb-4">
                Informações para candidatura
              </h2>

              <div className="space-y-3">

                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4">
                  <span className="block text-sm font-semibold text-zinc-500 mb-1">
                    Contato
                  </span>

                  {contato.href ? (
                    <a
                      href={contato.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium break-all"
                    >

                      {contato.label}
                    </a>
                  ) : (
                    <p className="text-zinc-900 font-medium break-all">
                      {contato.text}
                    </p>
                  )}
                </div>

                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4">
                  <span className="block text-sm font-semibold text-zinc-500 mb-1">
                    Local da vaga
                  </span>

                  <p className="text-zinc-900 font-medium">
                    {cidade} - {estado}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </article>

        {/* CTA */}
        <div className="mt-8 mb-8">
          <CallAction />
        </div>

        <AdsBanner type="footer" />


      </section>

      {/* SEO Google Jobs */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            identifier: {
              "@type": "PropertyValue",
              name: "Empregos Jaú",
              value: vaga.id,
            },
            title: vaga.titulo,

            description: vaga.descricao?.replace(/\n/g, " "),

            datePosted: vaga.created_at,

            validThrough: new Date(
              new Date(vaga.created_at).getTime() +
              30 * 24 * 60 * 60 * 1000
            ).toISOString(),

            dateModified: vaga.updated_at || vaga.created_at,
            employmentType: "FULL_TIME",
            directApply: contato.href?.includes("wa.me"),
            url: `${baseUrl}/vaga/${resolvedParams.slug}`,
            hiringOrganization: {
              "@type": "Organization",
              name: vaga.empresa,

              sameAs: "https://jauempregos.vercel.app",

              logo: "https://jauempregos.vercel.app/images/logo.png",
            },

            jobLocation: {
              "@type": "Place",

              address: {
                "@type": "PostalAddress",


                addressLocality: cidade,

                addressRegion: estado,

                ...(vaga.endereco && {
                  streetAddress: vaga.endereco,
                }),
                ...(vaga.cep && {
                  postalCode: vaga.cep,
                }),

                addressCountry: "BR",
              },
            },

            applicantLocationRequirements: {
              "@type": "Country",
              name: "Brasil",
            },

            ...(vaga.salario && {
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "BRL",
                value: {
                  "@type": "QuantitativeValue",
                  value: vaga.salario,
                  unitText: "MONTH",
                },
              },
            }),
          }),
        }}
      />

    </main>
  );
}