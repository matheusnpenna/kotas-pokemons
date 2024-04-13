import type { UseFetchOptions } from "#app"

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
    const endpoint_url = `/pokemon?${query_params}`;
    const { data } = await useFetch(endpoint_url, GLOBAL_CONFIG);
    return data.value;
  }

  const getPokemonInfo = async (id: String | Number) => {
    const endpoint_url = `/pokemon/${id}`;
    const { data } = await useFetch(endpoint_url, GLOBAL_CONFIG);
    return data.value;
  }

  return {
    getPokemons,
    getPokemonInfo
  }
}
