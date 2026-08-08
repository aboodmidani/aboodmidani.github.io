// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aboodmidani.github.io",
  base: "/",
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
    fallback: {
      en: "de",
    },
  },
  integrations: [
    tailwind(),
    react({
      jsxImportSource: "react",
    }),
    sitemap({
      filter: (page) => !page.includes('/thanks/') && page !== 'https://aboodmidani.github.io/',
      i18n: {
        defaultLocale: "de",
        locales: {
          de: "de",
          en: "en",
        },
      },
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
});
