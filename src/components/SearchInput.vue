<template>
  <div class="">
    <input
      class="search-input-component appearance-none block w-full bg-white text-gray-700 border border-secondary rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-password" 
      type="text" 
      :placeholder="props.placeholder" 
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
const props = defineProps(['modelValue', 'placeholder'])
const emit = defineEmits(['update:modelValue'])
</script>
<style lang="scss" scoped>
.search-input-component {
  border-radius: 50px;
}
</style>