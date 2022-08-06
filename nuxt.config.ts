import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: true,
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["@/assets/css/main.css"],
  ssr: false,
  target: "static",
  plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
  modules: ["@nuxt/image-edge"],
});