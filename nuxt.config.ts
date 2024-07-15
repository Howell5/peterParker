export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  ui: {
    icons: ['heroicons', 'simple-icons'],
  },
  devServer: {
    port: 4999,
  },
  devtools: { enabled: true },
})
