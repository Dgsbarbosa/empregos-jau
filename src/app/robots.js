export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://jauempregos.vercel.app/sitemap.xml",
  };
}