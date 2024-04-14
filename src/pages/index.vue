<template>
  <div class="home-view pt-8">
    <div class="container mx-auto px-44">
      <SearchInput 
        v-model="params.search" 
        placeholder="Pesquise por nome ou código" 
        class="mb-12"
      />
      <h6 class="font-bold mb-8">Pokémons</h6>
      <div class="grid grid-cols-5 gap-4 place-content-center">
        <PokemonCard 
          v-for="(item, i) in pokemons"
          :key="`poke-card-${i}`"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePokemonApi } from "@/composable/api/pokemons"
// import SkeletonCard from "@/components/SkeletonCard";
import SearchInput from "@/components/SearchInput";
import PokemonCard from "@/components/PokemonCard";
const { getPokemons } = usePokemonApi();
const pokemons = reactive([]);
const endResults = ref(false);
const params = ref({
  search: "",
  limit: 24,
  offset: 0,
  page: 1
});

const { data, fetchNextPage, error } = useInfiniteQuery({
  queryKey: ['getPokemons'],
  queryFn: async ({ pageParam }) => {
    const data = await getPokemons(pageParam);
    pokemons.push(...data.results);
    return data;
  },
  getNextPageParam(lastPage) {
    if (!lastPage.next) {
      endResults.value = true;
      return false;
    }
    params.value = {
      ...params.value,
      page: params.value.page + 1,
      offset: params.value.offset + params.value.limit
    };

    return params.value;
  }
})

const handleInfinityScroll = () => {
  if (
    window.scrollY + window.innerHeight >=
    document.body.scrollHeight - 100
  ) {
    if (!endResults.value) {
      fetchNextPage();
    }
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleInfinityScroll, {
    passive: true
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleInfinityScroll, {
    passive: true
  });
})
</script>
<style lang="scss" scoped>
.home-view {}
</style>
 