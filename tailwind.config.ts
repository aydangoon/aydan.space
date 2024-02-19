import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      spacing: {
        navbar: 'var(--navbar-height)',
        footer: 'var(--footer-height)',
        content: 'var(--content-height)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.15vw + 0.77rem, 0.89rem)',
        md: 'clamp(1rem, 0.3vw + 0.94rem, 1.19rem)',
        lg: 'clamp(1.25rem, 0.54vw + 1.15rem, 1.58rem)',
        xl: 'clamp(1.56rem, 0.89vw + 1.4rem, 2.11rem)',
        '2xl': 'clamp(1.95rem, 1.4vw + 1.69rem, 2.81rem)',
        '3xl': 'clamp(2.44rem, 2.13vw + 2.05rem, 3.75rem)',
        '4xl': 'clamp(3.05rem, 3.16vw + 2.47rem, 5rem)',
        '5xl': 'clamp(3.81rem, 4.63vw + 2.96rem, 6.66rem)',
        '6xl': 'clamp(4.77rem, 6.69vw + 3.53rem, 8.88rem)',
      },
      colors: {
        border: 'rgb(var(--border))',
        input: 'rgb(var(--input))',
        ring: 'rgb(var(--ring))',
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'rgb(var(--destructive))',
          foreground: 'rgb(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'rgb(var(--accent))',
          foreground: 'rgb(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'rgb(var(--popover))',
          foreground: 'rgb(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'rgb(var(--card))',
          foreground: 'rgb(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
