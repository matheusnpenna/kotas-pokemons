<template>
  <div class="home-view pt-8">
    <div class="container mx-auto px-44">
      <SearchInput 
        v-model="search" 
        placeholder="Pesquise por nome ou código" 
        class="mb-12"
      />
      <h3 class="font-bold mb-8">Pokémons</h3>
      <div class="grid grid-cols-5 gap-4 place-content-center">
        <PokemonCard 
          v-for="(item, i) in store.pokemons"
          :key="`poke-card-${i}`"
          :data="item"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import SearchInput from "@/components/SearchInput";
import PokemonCard from "@/components/PokemonCard";
import { usePokemonStore } from "@/store/pokemon";
const store = usePokemonStore();
const endResults = ref(false);
const search = ref("");
const params = ref({
  limit: 24,
  offset: 0,
  page: 1
});

const { fetchNextPage } = useInfiniteQuery({
  queryKey: ['getPokemons'],
  queryFn: async ({ pageParam }) => await store.getPokemons(pageParam),
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

watch(search, (v) => {
  if (v.length == 0) {
    store.getPokemons(params.value);
  } else {
    store.filterPokemon(search.value);
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
 