import { defineStore } from 'pinia'
import type { UseFetchOptions } from "#app"
import type { PokemonType } from '~/types';

interface Parameters extends Record<string, string> {
  offset: string;
  limit: string;
}
const config = useRuntimeConfig()
const GLOBAL_CONFIG: UseFetchOptions<object> = {
  baseURL: config.public.baseURL
}

export const usePokemonStore = defineStore('pokemon', {
  state: () => {
    return {
      pokemons: reactive<PokemonType[]>([]),
      pokemon: reactive<PokemonType>({
        name: undefined,
        url: ''
      })
    };
  },
  actions: {
    async getPokemons(params?: Parameters) {
      const query_params = new URLSearchParams(params);
      const { data } = await useFetch(`/pokemon?${query_params}`, GLOBAL_CONFIG);
      this.pokemons.push(...data.value.results)
      return data.value;
    },
    async getPokemonInfo(id: String | Number) {
      const { data } = await useFetch(`/pokemon/${id}`, GLOBAL_CONFIG);
      this.pokemon = data.value;
      return data.value;
    },
    async filterPokemon(term: string = "") {
      const { data } = await useFetch(`/pokemon/${term}`, GLOBAL_CONFIG);
      this.pokemons = data.value.results;
      return data.value;
    },
  }
})