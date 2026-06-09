import { supabase } from "@/lib/supabase";

const baseUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jauempregos.vercel.app"
).replace(/\/$/, "");

export default async function sitemap() {
  // Buscar vagas
const { data } = await supabase
  .from("vagas")
  .select("slug, created_at");

  // Vagas dinâmicas
  const vagas = (data || []).map((vaga) => ({
    url: `${baseUrl}/vaga/${vaga.slug}`,

    lastModified: new Date(vaga.created_at),

    changeFrequency: "daily",

    priority: 0.8,
  }));

  // Páginas fixas
  const paginasEstaticas = [
    { url: "", priority: 1.0 },

    { url: "/vagas", priority: 0.8 },

    { url: "/anunciar", priority: 0.8 },

    { url: "/sobre", priority: 0.8 },

    { url: "/contato", priority: 0.8 },

    { url: "/doacoes", priority: 0.8 },

    { url: "/privacidade", priority: 0.8 },

    { url: "/termos", priority: 0.8 },

    { url: "/cadastrar_vaga", priority: 0.8 },
  ].map((pagina) => ({
    url: `${baseUrl}${pagina.url}`,

    lastModified: new Date(),

    changeFrequency: "daily",

    priority: pagina.priority,
  }));

  return [...paginasEstaticas, ...vagas];
}