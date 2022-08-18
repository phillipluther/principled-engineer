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
    },
    colors: {
      'brando-100': '#0a0a00',
      'brando-200': '#292919',
      'brando-300': '#474737',
      'brando-400': '#666656',
      'brando-500': '#858575',
      'brando-600': '#a2a292',
      'brando-700': '#c2c2b2',
      'brando-800': '#e0e0d0',
      'brando-900': '#ffffef',
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
  plugins: [],
};
