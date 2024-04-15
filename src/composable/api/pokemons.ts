import type { UseFetchOptions } from "#app"
// import { usePokemonStore } from "@/store/pokemon";

interface Parameters extends Record<string, string> {
  offset: string;
  limit: string;
}

export const usePokemonApi = () => {
  const config = useRuntimeConfig()
  const GLOBAL_CONFIG: UseFetchOptions<object> = {
    baseURL: config.public.baseURL
  }
  const getPokemons = async (params?: Parameters) => {
    const query_params = new URLSearchParams(params);
    const { data } = await useFetch(`/pokemon?${query_params}`, GLOBAL_CONFIG);
    return data.value;
  }

  const getPokemonInfo = async (id: String | Number) => {
    const { data } = await useFetch(`/pokemon/${id}`, GLOBAL_CONFIG);
    return data.value;
  }

  const filterPokemon = async (term: string = "") => {
    const { data } = await useFetch(`/pokemon/${term}`, GLOBAL_CONFIG);
    return data.value;
  }

  return {
    getPokemons,
    getPokemonInfo,
    filterPokemon
  }
}
