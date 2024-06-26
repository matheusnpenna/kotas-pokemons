<template>
  <div class="home-view pt-8">
    <div ref="infinityScrollWrapper" class="container scroll-area mx-auto px-10 md:px-20 lg:px-44">
      <SearchInput 
        v-model="search" 
        placeholder="Pesquise por nome ou código" 
        class="mb-12"
      />
      <div class="flex items-center mb-8">
        <h3 class="font-bold mr-4">Pokémons</h3>
        <LoadingSpinner v-if="isPending" />
      </div>
      <div v-if="store.pokemons.length == 0 && !isP">
        <span class="text-slate-500">
          Não encontramos nenhum pokemon {{ search.length ? "com este nome ou id" : "" }}
        </span>
      </div>
      <div v-if="store.pokemons.length" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 lg:gap-4 xl:gap-9 w-full">
        <PokemonCard 
          v-for="(item, i) in store.pokemons"
          :key="`poke-card-${i}`"
          :data="item"
        />
      </div>
      <div ref="infinityScrollSentinel" id="sentinel"></div>
    </div>
  </div>
</template>
<script setup>
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import SearchInput from "~/components/SearchInput";
import PokemonCard from "~/components/PokemonCard";
import { usePokemonStore } from "~/store/pokemon";
const store = usePokemonStore();
const router = useRouter();
const route = useRoute();
const infinityScrollWrapper = ref(null);
const infinityScrollSentinel = ref(null);
const endResults = ref(false);
const search = ref("");
const params = ref({
  limit: 24,
  offset: 0,
  page: 1
});

const { fetchNextPage, isPending } = useInfiniteQuery({
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
    params.value = {
      limit: 24,
      offset: 0,
      page: 1
    };
    store.getPokemons(params.value, { reset: true });
    router.push({
      ...route,
      query: {}
    })
  } else {
    store.filterPokemon(v);
  }
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!endResults.value && search.value.length == 0) {
              fetchNextPage();
            }
          }
      })
  }, { root: infinityScrollWrapper.value })

  observer.observe(infinityScrollSentinel.value)

  if (route.query?.search) {
    search.value = route?.query.search;
  }
});
</script>