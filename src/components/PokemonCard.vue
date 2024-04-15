<template>
  <ActionDispatcher method-name="getPokemonInfo" :parameters="data.name" @success="success">
    <NuxtLink v-if="info" :to="'/pokemon/'+data.name">
      <div class="w-[153px] h-[190px] bg-white rounded-lg text-center flex flex-col items-center justify-center">
        <NuxtImg v-if="imgSrc" class="object-contain h-20" :src="imgSrc" :alt="`${info.name}`" />
        <span class="text-base font-bold mb-2">{{ info.name }}</span>
        <span v-if="info" class="quicksand text-sm font-bold text-[9px] mb-8">Cód {{ info.id }}</span>
        <div v-if="info" class="flex items-center justify-center flex-wrap">
          <template v-for="(item, i) in info.types">
            <span 
              class="w-[64px] h-[16px] rounded-lg flex items-center justify-center text-white py-1 px-2 uppercase text-[8px]" 
              :class="`bg-${item.type.name} ${i < info.types.length - 1 ? 'mr-1' : ''}`"
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
import { get_key_value } from "~/functions";
import type { PokemonType, PokemonInfoType } from "~/types";
const props = defineProps<PokemonCardProps>();
const info = ref<PokemonInfoType|null>(null);
//@ts-ignore
const success = data => {
  info.value = data.value;
};
const pokemonID = computed(() => info?.value?.id || props.data.name);
const imgSrc = computed(() => {
  const sprites = info.value?.sprites;
  if (!sprites) return "";
  return get_key_value(sprites, ['front_default', 'front_shiny']);
});
</script>
<style lang="scss" scoped>
.pokemon-card-component {
  box-shadow: 0px 4px 20px 0px #E1E1E1;
}
</style>