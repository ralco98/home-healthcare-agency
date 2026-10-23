/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        surface: {
          DEFAULT: "hsl(var(--surface) / <alpha-value>)",
          raised: "hsl(var(--surface-raised) / <alpha-value>)",
        },
        border: "hsl(var(--border) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: {
          DEFAULT: "hsl(var(--surface-raised) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        subtle: "hsl(var(--subtle) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          dark: "hsl(var(--primary-dark) / <alpha-value>)",
          light: "hsl(var(--primary-light) / <alpha-value>)",
          muted: "hsl(var(--primary-muted) / <alpha-value>)",
          foreground: "hsl(0 0% 100%)",
        },
        forest: {
          900: "#14251c",
          800: "#1c3527",
          700: "#2d523e",
          600: "#3d6d53",
          500: "#4e8566",
        },
        sage: {
          50: "#f6f8f6",
          100: "#edf1ee",
          200: "#dbe3dc",
          300: "#bed0c1",
          400: "#9db7a1",
          500: "#7c9d81",
        },
        dark: {
          green: "hsl(var(--dark-green) / <alpha-value>)",
          surface: "hsl(var(--dark-surface) / <alpha-value>)",
          border: "hsl(var(--dark-border) / <alpha-value>)",
        },
        cream: "hsl(var(--cream) / <alpha-value>)",
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '14px',
        'subtle': '8px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(28, 53, 39, 0.05), 0 2px 6px -1px rgba(28, 53, 39, 0.03)',
        'lift': '0 12px 32px -4px rgba(28, 53, 39, 0.08), 0 4px 12px -2px rgba(28, 53, 39, 0.04)',
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
  plugins: [],
}
