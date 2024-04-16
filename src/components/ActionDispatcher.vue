<template>
  <div class="action-dispatcher">
    <template v-if="isPending">
      <div class="text-center">
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      </div>
    </template>

    <div
      v-else-if="error"
      class="error centering text-center p-5"
    >
      <div class="text-secondary mb-3">
        O recurso que você está buscando não foi encontrado.
      </div>
      <!-- <button class="btn-link btn" @click="dispatch">
        Tentar novamente
      </button> -->
    </div>

    <slot v-else v-bind:data="data" />
  </div>
</template>

<script setup>
import { usePokemonStore } from "~/store/pokemon";
const emit = defineEmits(['success', 'error']);
const store = usePokemonStore();

const props = defineProps({
  methodName: {
    type: String,
  },
  parameters: {
    type: [Object, Number, String],
    default: null
  }
});

const { isPending, isSuccess, isError, data, error, refetch } = useQuery({
  queryKey: [`${props.methodName}`, props.parameters],
  queryFn: async () => await store[props.methodName](props.parameters)
});

watch(isError, v => {
  if (v) emit('error', error);
});

watch(isSuccess, v => {
  if (v) emit('success', data);
});
</script>

<style lang="scss" scoped>
.action-dispatcher {
  .error {
    max-width: 400px;
    margin: auto;
  }
}
</style>
