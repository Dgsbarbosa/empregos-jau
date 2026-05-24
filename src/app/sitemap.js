import { supabase } from "@/lib/supabase";

export default async function sitemap() {

  const { data: vagas } = await supabase
    .from("vagas")
    .select("slug");

  const vagasUrls = vagas.map((vaga) => ({
    url: `https://SEUDOMINIO.com/vaga/${vaga.slug}`,
  }));

  return [
    {
      url: "https://SEUDOMINIO.com",
    },

    ...vagasUrls,
  ];
}