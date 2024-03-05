import type { Config } from 'tailwindcss'
import { dungsilPreset } from '@dungsil/tailwind'

export default {
  presets: [dungsilPreset()],
} satisfies Partial<Config>
