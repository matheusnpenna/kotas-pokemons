<template>
  <ActionDispatcher :url="data.url" @success="success">
    <div class="pokemon-card-component text-center flex flex-col">
      <img v-if="info" :src="info.sprites.front_default" alt="">
      <span class="font-bold mb-8">{{ data.name }}</span>
      <span v-if="info" class="text-sm font-bold">Cód {{ info.id }}</span>
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
}
</style>