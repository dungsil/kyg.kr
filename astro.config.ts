import { defineConfig } from 'astro/config'
import redirects from './src/redirects.ts'

const redirectEntries = Object.entries(redirects)
  .map(([key, { href }]) => [`/${key}`, href])

// https://astro.build/config
export default defineConfig({
  output: 'static',
  redirects: Object.fromEntries(redirectEntries)
})
