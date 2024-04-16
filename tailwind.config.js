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
        "second-gray": "#616161",
        secondary: "#E1E1E1",
        grass: "#08FEC3",
        psychic: "#08FEC3",
        fighting: "#08FEC3",
        poison: "#AF08FE",
        water: "#00A3FF",
        ice: "#00A3FF",
        steel:  "#85826E",
        fire: "#FE0808",
        electric: "#FFB800",
        ground: "#85826E",
        fairy: "#FBA1EC",
        ghost: "#FBA1EC",
        normal: "#C4C4C4",
        dragon: "#C4C4C4",
        flying: "#5317FC",
        default: "#0E0E0E",
        dark: "#0E0E0E",
        bug: "#0E0E0E",
        rock: "#0E0E0E",
        blue: "#00A3FF",
      }
    },
  },
  safelist: [{
    pattern: /(bg|text|border)-(dragon|fighting|psychic|ghost|ice|steel|dark|rock|second-gray|secondary|grass|poison|water|fire|electric|ground|fairy|normal|flying|default|bug)/
  }],
  plugins: [],
}

