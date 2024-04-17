<template>
  <div class="action-dispatcher">
    <div
      v-if="error"
      class="error centering text-center p-5"
    >
      <div class="text-secondary mb-3">
        O recurso que você está buscando não foi encontrado.
      </div>
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

const { isPending, isSuccess, isError, data, error } = useQuery({
  queryKey: [`${props.methodName}`, props.parameters],
  queryFn: async () => await store[props.methodName](props.parameters)
});


watch(data, v => {
  if (isSuccess.value) {
    emit('success', v);
  } else if (isError.value) {
    emit('error', error.value);
  }
}, { immediate: true })
</script>

<style lang="scss" scoped>
.action-dispatcher {
  .error {
    max-width: 400px;
    margin: auto;
  }
}
</style>
