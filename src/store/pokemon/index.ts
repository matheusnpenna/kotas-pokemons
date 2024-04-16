import { defineStore } from 'pinia'
import type { PokemonType, Parameters } from '~/types';

const config = useRuntimeConfig()
export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      pokemons: reactive<PokemonType[]>([]),
    };
  },
  actions: {
    async getPokemons(params?: Parameters, options = { reset: false }) {
      if (options && options.reset) {
        this.pokemons = [];
      }
      const query_params = new URLSearchParams(params);
      const data = await $fetch(`${config.public.baseURL}/pokemon?${query_params}`);
      // @ts-ignore
      this.pokemons.push(...data.results)
      return data;
    },
    async getPokemonInfo(id: String | Number) {
      const data = await $fetch(`${config.public.baseURL}/pokemon/${id}`);
      return data;
    },
    async filterPokemon(term: string = "") {
      let list: PokemonType[] = [];
      this.pokemons = [];
      try {
        const data = await $fetch(`${config.public.baseURL}/pokemon/${term}`);
        console.log("TRY", data);
        //@ts-ignore
        list.push(data)
        this.pokemons = list;
      } catch(e) {}
      return list;
    },
  }
})