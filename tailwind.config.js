/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F2EA',
        surface: '#FBF9F5',
        'surface-subtle': '#F2EDE3',
        ink: {
          DEFAULT: '#17212B',
          muted: '#66717A',
          subtle: '#8C97A0',
          dark: '#0E161D'
        },
        accent: {
          teal: '#477B76',
          'teal-light': '#EBF2F1',
          'teal-dark': '#355D59',
          coral: '#C9826F',
          'coral-light': '#FAEDE9',
          'coral-dark': '#A66352'
        },
        line: '#DDD8CE',
        'line-light': '#ECE8E0'
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 33, 43, 0.05)',
        'lift': '0 12px 32px -4px rgba(23, 33, 43, 0.08), 0 4px 12px -2px rgba(23, 33, 43, 0.03)',
        'editorial': '0 20px 40px -10px rgba(23, 33, 43, 0.06)',
      },
      letterSpacing: {
        'widest-plus': '0.2em',
      }
    },
  },
  plugins: [],
}
