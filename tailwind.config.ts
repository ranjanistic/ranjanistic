import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // Inter is now the general sans-serif
        serif: ['var(--font-alegreya)', 'serif'], // Alegreya for body/longform text
        headline: ['var(--font-belleza)', 'var(--font-inter)', 'sans-serif'], // Belleza for main headings
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Soft Lavender
          foreground: 'hsl(var(--primary-foreground))', // Darker purple for text on lavender
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Pale Cyan
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s ease-out forwards',
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.foreground'),
            fontFamily: theme('fontFamily.serif').join(','), // Default prose to serif
            strong: { color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            a: {
              color: 'hsl(var(--primary-foreground))', // Use darker purple for links
              textDecoration: 'underline',
              textUnderlineOffset: '2px',
              '&:hover': {
                color: 'hsl(var(--primary))', // Lighter lavender on hover (text color)
                backgroundColor: 'hsl(var(--primary-foreground))', // Darker purple background on hover
              },
            },
            h1: { fontFamily: theme('fontFamily.headline').join(','), color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            h2: { fontFamily: theme('fontFamily.headline').join(','), color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            h3: { fontFamily: theme('fontFamily.headline').join(','), color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            h4: { fontFamily: theme('fontFamily.headline').join(','), color: theme('colors.foreground'), fontWeight: theme('fontWeight.bold') },
            blockquote: { color: theme('colors.muted.foreground'), borderLeftColor: theme('colors.border')},
            'ul > li::marker': {
              color: theme('colors.muted.foreground'),
            },
            'ol > li::marker': {
              color: theme('colors.muted.foreground'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
