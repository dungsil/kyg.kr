import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default {
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['simple-icons']),
    }),
  ],
  theme: {
    fontFamily: {
      sans: [
        ['"Pretendard Variable"', 'Pretendard', ...fontFamily.sans],
        {
          fontFeatureSettings: '"calt", "case", "salt", "ss03", "ss05", "ss06"',
        },
      ],
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',

      gray: {
        50: '#F9F9F9',
        100: '#F3F3F3',
        200: '#E7E7E7',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#727272',
        600: '#555555',
        700: '#404040',
        800: '#282828',
        900: '#181818',
      },
    },
  },
} satisfies Partial<Config>
