<template>
  <ActionDispatcher method-name="getPokemons" :parameters="params" @success="success">
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
  </ActionDispatcher>
</template>
<script setup>
import ActionDispatcher from "@/components/ActionDispatcher";
import SkeletonCard from "@/components/SkeletonCard";
import PokemonCard from "@/components/PokemonCard";
const pokemons = reactive([]);
const params = ref({
  per_page: 24
});

const success = data => {
  pokemons.push(...data.value.results);
}
</script>
<style lang="scss" scoped>
.home-view {
}
</style>
 