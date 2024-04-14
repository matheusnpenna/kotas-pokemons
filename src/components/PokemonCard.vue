<template>
  <ActionDispatcher :url="`${data.url}`" @success="success">
    <div class="pokemon-card-component text-center flex flex-col justify-center">
      <NuxtImg v-if="info" class="poke-img" :src="info.sprites.front_default" :alt="`${data.name}`" />
      <span class="font-bold mb-2">{{ data.name }}</span>
      <span v-if="info" class="text-sm font-bold text-[9px] mb-8">Cód {{ info.id }}</span>
      <div v-if="info" class="flex items-center justify-center flex-wrap">
        <template v-for="(item, i) in info.types">
          <span 
            class="type-tag flex items-center justify-center text-white py-1 px-2 uppercase text-[8px]" 
            :class="`bg-${item.type.name} ${i < info.types.length - 1 ? 'mr-1' : ''}`"
          >
            {{ item.type.name }}
          </span>
        </template>
      </div>
    </div>
  </ActionDispatcher>
</template>
<script setup lang="ts">
import type { PokemonType, PokemonInfoType } from "@/types";
interface PokemonCardProps {
  data: PokemonType
}
const props = defineProps<PokemonCardProps>();
const info = ref<PokemonInfoType|null>(null)
const success = data => {
  info.value = data.value;
};
</script>
<style lang="scss" scoped>
.pokemon-card-component {
  box-shadow: 0px 4px 20px 0px #E1E1E1;
  background-color: #fff;
  border-radius: 8px;
  width: 153px;
  height: 190px;
  .poke-img {
    object-fit: contain;
    max-height: 70px;
  }

  .type-tag {
    width: 64px;
    height: 16px;
    border-radius: 8px;
  }
}
</style>