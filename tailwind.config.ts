import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ============================================
        // MATCHLAB FANTASY BRAND COLORS
        // FinTech-inspired palette: Navy + Teal + Cream
        // ============================================
        brand: {
          // Primary: Teal - your main accent (buttons, links, highlights)
          primary: '#1EC9B6',
          'primary-dark': '#17A89A',
          'primary-light': '#4DD9C9',

          // Navy: Deep blue - dark backgrounds, text
          navy: '#061A2A',
          'navy-light': '#0D2E47',
          'navy-lighter': '#153D5E',

          // Cream: Off-white - light text on dark, subtle backgrounds
          cream: '#F1F0EB',
          'cream-dark': '#E5E4DF',
          'cream-light': '#F8F7F4',
        },

        // Semantic colors (fintech style - muted, professional)
        success: '#1EC9B6',       // Your teal (positive = brand aligned)
        warning: '#F5A623',       // Muted gold (not harsh yellow)
        danger: '#E74C3C',        // Muted red
        info: '#5DADE2',          // Soft blue (complementary to teal)

        // Surface colors (light mode backgrounds)
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F8F7F4',   // Hint of cream
          tertiary: '#F1F0EB',    // Your cream
          dark: '#061A2A',        // Your navy
          'dark-secondary': '#0D2E47',
        },

        // Text colors
        text: {
          primary: '#061A2A',     // Navy for main text
          secondary: '#4A5568',   // Muted gray
          muted: '#718096',       // Light gray
          inverse: '#F1F0EB',     // Cream for dark backgrounds
        },

        // Confidence tier colors (colorblind-friendly choices)
        // Using value/saturation differences, not just hue
        confidence: {
          elite: '#1EC9B6',       // Teal (your brand - most visible)
          high: '#5DADE2',        // Light blue (good contrast)
          medium: '#F5A623',      // Gold (distinct from blue/teal)
          low: '#8E9AAF',         // Muted blue-gray
        },

        // Chart/data visualization palette
        chart: {
          positive: '#1EC9B6',    // Teal - gains, good outcomes
          negative: '#E74C3C',    // Red - losses
          neutral: '#8E9AAF',     // Gray - baseline
          highlight: '#F5A623',   // Gold - attention
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },

      boxShadow: {
        'fintech': '0 4px 6px -1px rgba(6, 26, 42, 0.1), 0 2px 4px -1px rgba(6, 26, 42, 0.06)',
        'fintech-lg': '0 10px 15px -3px rgba(6, 26, 42, 0.1), 0 4px 6px -2px rgba(6, 26, 42, 0.05)',
      },
    },
  },
  plugins: [],
}

export default config
