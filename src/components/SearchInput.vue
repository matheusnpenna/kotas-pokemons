<template>
  <div class="search-input-component relative">
    <input
      class="rounded-[50px] appearance-none block w-full bg-white text-gray-700 border border-secondary rounded py-3 px-4 lg:px-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="grid-password" 
      type="text" 
      :placeholder="props.placeholder" 
      :value="props.modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <button class="btn font-bold text-xs" @click="emit('update:modelValue', '')">X</button>
  </div>
</template>
<script setup>
const props = defineProps(['modelValue', 'placeholder'])
const emit = defineEmits(['update:modelValue'])
</script>
<style lang="scss" scoped>
.search-input-component {
  button {
    position: absolute;
    top: 50%;
    left: 98%;
    transform: translateX(-98%) translateY(-50%);
  }

  input::placeholder {
    color: #C1BEBE;
  }
}
</style>