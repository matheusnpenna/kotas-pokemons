//@vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { VueQueryPlugin } from "@tanstack/vue-query";
import AutoImport from 'unplugin-auto-import/vite'
import PokemonCard from '../PokemonCard.vue'

describe("PokemonCard Component test", () => {
  const wrapper = mount(PokemonCard, {
    global: {
      plugins: [
        VueQueryPlugin,
      ],
    },
    props: {
      data: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/"
      }
    }
  });
  //@ts-ignore
  wrapper.vm.$refs.ActionDispatcherRef.$emit('success', 
    {"abilities":[{"ability":{"name":"overgrow","url":"https://pokeapi.co/api/v2/ability/65/"},"is_hidden":!1,"slot":1},{"ability":{"name":"chlorophyll","url":"https://pokeapi.co/api/v2/ability/34/"},"is_hidden":!0,"slot":3}],"id":1,"name":"bulbasaur","sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png","front_shiny_female":null,"other":{"dream_world":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg","front_female":null},"home":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png","front_shiny_female":null},"official-artwork":{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png","front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"},"showdown":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/1.gif","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/1.gif","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/1.gif","front_shiny_female":null}}},"types":[{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},{"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}]}
  );
  it('should render correctly', async () => {
    expect(wrapper.html()).toContain('Cód 1');
  })
});