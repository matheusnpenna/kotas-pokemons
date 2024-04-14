<template>
  <div class="home-view pt-8">
    <div class="container mx-auto px-44">
      <h6 class="font-bold mb-8">Pokémons</h6>
      <div class="grid grid-cols-5 gap-4 place-content-center">
        <template v-if="isFetching">
          <SkeletonCard 
            v-for="(item, i) in Array.from(10)"
            :key="`skeleton-card-${i}`"
          />
        </template>
        <template v-else-if="pokemons">
          <PokemonCard 
            v-for="(item, i) in pokemons"
            :key="`poke-card-${i}`"
            :data="item"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { usePokemonApi } from "@/composable/api/pokemons"
import SkeletonCard from "@/components/SkeletonCard";
import PokemonCard from "@/components/PokemonCard";
const { getPokemons } = usePokemonApi();
const pokemons = reactive([]);
const endResults = ref(false);
const params = ref({
  limit: 24,
  offset: 0,
  page: 1
});
const search = ref("");

const { isPending, isSuccess, isError, data, fetchNextPage, error } = useInfiniteQuery({
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
.home-view {
}
</style>
 