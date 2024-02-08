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
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
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
