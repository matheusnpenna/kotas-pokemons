/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand']
      },
      colors: {
        secondary: "#E1E1E1",
        grass: "#08FEC3",
        poison: "#AF08FE",
        water: "#00A3FF",
        fire: "#FE0808",
        electric: "#FFB800",
        ground: "#85826E",
        fairy: "#FBA1EC",
        normal: "#C4C4C4",
        flying: "#5317FC",
        default: "#0E0E0E",
        "second-gray": "616161",
        bug: "#0E0E0E",
      }
    },
  },
  safelist: [{
    pattern: /(bg|text|border)-(second-gray|secondary|grass|poison|water|fire|eletric|ground|fairy|normal|flying|default|bug)/
  }],
  plugins: [],
}

