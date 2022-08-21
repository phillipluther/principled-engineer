/** @type {import('tailwindcss').Config} */

const textureBg = `url('/images/texture-tile.png')`;

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'global-header': `${textureBg}, linear-gradient(to bottom right, #c2c2b2, #e0e0d0, #a3a393)`,
        texture: textureBg,
      },
      dropShadow: ({ theme }) => ({
        'text-offset': `2px 1px 0px ${theme('colors.brando.400')}`,
      }),
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              blockquote: {
                position: 'relative',
                overflow: 'hidden',
                fontSize: '1.25rem',
                color: theme('colors.brando.600'),
                fontStyle: 'italic',
                zIndex: 0,
              },
            },
          },
          brando: {
            css: {
              '--tw-prose-body': theme('colors.brando.700'),
              '--tw-prose-headings': theme('colors.brando.800'),
              '--tw-prose-lead': theme('colors.brando.700'),
              '--tw-prose-links': theme('colors.brando.900'),
              '--tw-prose-bold': theme('colors.brando.700'),
              '--tw-prose-counters': theme('colors.brando.600'),
              '--tw-prose-bullets': theme('colors.brando.400'),
              '--tw-prose-hr': theme('colors.brando.300'),
              '--tw-prose-quotes': theme('colors.brando.700'),
              '--tw-prose-quote-borders': theme('colors.brando.300'),
              '--tw-prose-captions': theme('colors.brando.700'),
              '--tw-prose-code': theme('colors.brando.700'),
              '--tw-prose-pre-code': theme('colors.brando.100'),
              '--tw-prose-pre-bg': theme('colors.brando.900'),
              '--tw-prose-th-borders': theme('colors.brando.300'),
              '--tw-prose-td-borders': theme('colors.brando.200'),
            },
          },
        };
      },
    },
    colors: {
      brando: {
        100: '#0a0a00',
        200: '#292919',
        300: '#474737',
        400: '#666656',
        500: '#858575',
        600: '#a2a292',
        700: '#c2c2b2',
        800: '#e0e0d0',
        900: '#ffffef',
      },
    },
    spacing: {
      0.5: '2px',
      1: '4px',
      1.5: '6px',
      2: '8px',
      2.5: '10px',
      3: '12px',
      3.5: '14px',
      4: '16px',
      5: '20px',
      6: '24px',
      7: '28px',
      8: '32px',
      9: '36px',
      10: '40px',
      11: '44px',
      12: '48px ',
      13: '52px',
      14: '56px',
      15: '60px',
      16: '64px ',
    },
    fontFamily: {
      display: ['Lora', 'serif'],
      text: ['Merriweather', 'serif'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
