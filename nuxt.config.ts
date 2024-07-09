// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-04",
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})