import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'darkGray': '#18191F',
        'neutralGray': '#4D4D4D',
        'lightGray': '#717171',
        'greenBrand': {
          100: '#4CAF4F',
          200: '#43A046',
          300: '#388E3B',
          400: '#237D31',
          500: '#1B5E1F',
          600: '#103E13',
        },
      },
    },
 
 },
  plugins: [],
}
export default config
