export default defineNuxtConfig({
  srcDir: 'src',
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    headNext: true,
  },
  app: {
    rootId: '_root',
    keepalive: true,
    buildAssetsDir: '/public/',
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/image'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  tailwindcss: {
    exposeConfig: false,
  },
  image: {
    dir: 'assets/images/',
  },
  nitro: {
    preset: 'github-pages',
  },
})
