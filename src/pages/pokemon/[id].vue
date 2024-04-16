<template>
  <div class="pokemon-detail-component pt-12">
    <div v-if="pokemon" class="container mx-auto px-0 lg:px-60 xxl:px-76">
      <div class="card flex flex-col items-center justify-center mb-8">
        <NuxtImg v-if="imgSrc" class="object-contain h-28 mb-4" :src="imgSrc" :alt="`${pokemon.name}`" />
        <span class="quicksand text-sm font-bold mb-12">{{ pokemon.name }}</span>
        <div class="flex items-center justify-center flex-wrap">
          <template v-for="(item, i) in pokemon.types">
            <span 
              class="w-[64px] h-[16px] rounded-lg flex items-center justify-center text-white py-1 px-2 uppercase text-[8px]" 
              :class="`bg-${item.type.name} ${i < pokemon.types.length - 1 ? 'mr-1' : ''}`"
            >
              {{ item.type.name }}
            </span>
          </template>
        </div>
      </div>

      <div class="card flex flex-col items-center justify-center rounded-lg px-4 mb-16">
        <h6 class="font-bold text-center mb-4">Habilidades</h6>
        <div v-for="effect in abilities_effect_entries" class="py-4 w-full border-top">
          <span class="text-xs text-second-gray">{{ effect.short_effect }}</span>
        </div>
      </div>
      <div class="text-center">
        <NuxtLink to="/" class="font-bold text-blue">Voltar</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { get_src_in_sprites } from "~/functions";
import type { PokemonInfoType } from "~/types";
const route = useRoute();

const { data, error } = await useAsyncData(
  "getPokemonInfo"+ route?.params?.id || '',
  async () => await $fetch('https://pokeapi.co/api/v2/pokemon/'+route.params.id)
);

const pokemon = data.value as PokemonInfoType;

//@ts-ignore
const imgSrc = pokemon ? get_src_in_sprites(pokemon.sprites, ['front_default', 'front_shiny']) : "";

const { data: abData, status: abStatus } = await useAsyncData(
  "pokemon-ability-"+ pokemon.id,
  async () => {
    const list = await Promise.all(
      pokemon.abilities.map(a => $fetch('https://pokeapi.co/api/v2/ability/'+a.ability.name))
    );
    //@ts-ignore
    const ab_data = list.map(i => i.effect_entries);
    return ab_data;
  }
);

const abilities_effect_entries = abStatus.value == "success" ? [...(abData.value || [])].flat(1) : [];
</script>
<style lang="scss" scoped>
.pokemon-detail-component {
  .border-top {
    border-top: 1px solid #F1F4F5;
  }
}
</style>