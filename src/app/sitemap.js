import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  // 1. Buscar vagas dinâmicas do Supabase
  const { data } = await supabase
    .from("vagas")
    .select("slug, updated_at");

  // 2. Mapear as vagas dinâmicas
  const vagas = (data || []).map((vaga) => ({
    url: `https://vercel.app{vaga.slug}`,
    lastModified: vaga.updated_at ? new Date(vaga.updated_at) : new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  // 3. Páginas institucionais fixas do seu site
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
    url: `https://vercel.app${pagina.url}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: pagina.priority,
  }));

  // 4. Juntar tudo em um único array
  return [...paginasEstaticas, ...vagas];
}
