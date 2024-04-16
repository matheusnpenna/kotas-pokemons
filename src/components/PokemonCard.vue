<template>
  <ActionDispatcher method-name="getPokemonInfo" :parameters="props.data.name" @success="success">
    <NuxtLink :to="'/pokemon/'+props.data.name">
      <div class="w-full h-[190px] bg-white rounded-lg text-center flex flex-col items-center justify-center py-4">
        <NuxtImg v-if="imgSrc" class="object-contain h-20" fit="contain" :src="imgSrc" :alt="`${props.data.name}`" loading="lazy" />
        <span class="text-base font-bold mb-2">{{ props.data.name }}</span>
        <span v-if="pokemonData" class="quicksand text-wrap text-sm font-bold text-[9px] mb-6">Cód {{ pokemonData.id }}</span>
        <div v-if="pokemonData" class="flex items-center justify-center flex-wrap">
          <template v-for="(item, i) in pokemonData.types">
            <span 
              class="w-[64px] h-[16px] rounded-lg flex items-center justify-center text-white py-1 px-2 uppercase text-[8px]" 
              :class="`bg-${item.type.name} ${i < pokemonData.types.length - 1 ? 'mr-1' : ''}`"
            >
              {{ item.type.name }}
            </span>
          </template>
        </div>
      </div>
    </NuxtLink>
  </ActionDispatcher>
</template>
<script setup lang="ts">
interface PokemonCardProps {
  data: PokemonType
}
import type { PokemonType, PokemonInfoType } from "~/types";
import { get_key_value } from "~/functions";
const props = defineProps<PokemonCardProps>();
const pokemonData = ref<PokemonInfoType | null>(null);

//@ts-ignore
const success = async data => { 
  pokemonData.value = { ...data } as PokemonInfoType;
};

const imgSrc = computed(() => {
  return pokemonData.value && pokemonData.value?.sprites ? 
    //@ts-ignore
    get_key_value(pokemonData.value.sprites, ['front_default', 'front_shiny']) : "";
});
</script>
<style lang="scss" scoped>
.pokemon-card-component {
  box-shadow: 0px 4px 20px 0px #E1E1E1;
}
</style>