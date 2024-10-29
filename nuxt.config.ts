import { fileURLToPath } from "url";
import process from "node:process";
import data from "./prisma/seeds.json";
const bookAPI = Object.fromEntries(
  new Map(data.map(({ isbn }) => [`/api/book/${isbn}`, { prerender: true }]))
);

const images = data.map(({ coverurl }) => coverurl);

const sw = process.env.SW === "true";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@vite-pwa/nuxt", "@nuxt/image", "@vueuse/nuxt"],
  experimental: {
    componentIslands: true,
    payloadExtraction: true,
    inlineRouteRules: true,
  },
  pwa: {
    strategies: "injectManifest",
    srcDir: "service-worker",
    filename: "sw.ts",
    registerType: "autoUpdate",
    registerWebManifestInRouteRules: true,
    manifest: {
      name: "My Book App",
      short_name: "My Book App",
      description: "mini library",
      start_url: "/",
      display: "standalone",
      theme_color: "#ffffff",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{css,html,png,svg,ico}"],
    },
    injectManifest: {
      globPatterns: ["**/*.{css,html,png,svg,ico}"],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20,
    },
  },
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,

      routes: ["/"],
    },
  },
  routeRules: {
    ...bookAPI,
    "/api/books": { prerender: true, cors: true },
  },
  imports: {
    autoImport: true,
  },
  image: {
    domains: ["https://m.media-amazon.com"],
  },
  alias: {
    "~": fileURLToPath(new URL("./", import.meta.url)),
    "@": fileURLToPath(new URL("./", import.meta.url)),
    "@lib": "./lib",
    // "~~": "/<rootDir>",
    // "@@": "/<rootDir>",
    assets: fileURLToPath(new URL("./assets", import.meta.url)),
  },
});
