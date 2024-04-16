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
    async getPokemons(params?: Parameters) {
      const query_params = new URLSearchParams(params);
      // @ts-ignore
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
      const data = await $fetch(`${config.public.baseURL}/pokemon/${term}`);
      // @ts-ignore
      this.pokemons = [data];
      return data;
    },
  }
})