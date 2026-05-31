import { supabase } from "@/lib/supabase";

export default async function sitemap() {
  const { data } = await supabase
    .from("vagas")
    .select("slug, updated_at");

  const vagas =
    (data || []).map((vaga) => ({
      url: `https://jauempregos.vercel.app/vaga/${vaga.slug}`,
      lastModified: vaga.updated_at,
      changeFrequency: "daily",
      priority: 0.8,
    }));

  return [
    {
      url: "https://jauempregos.vercel.app",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },

    ...vagas,
  ];
}