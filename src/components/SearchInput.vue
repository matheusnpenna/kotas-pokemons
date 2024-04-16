<template>
  <div class="search-input-component relative">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" width="20px" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
    <input
      class="rounded-[50px] appearance-none block w-full bg-white text-gray-700 border border-secondary rounded py-3 px-10 lg:px-8 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
    @media screen and (max-width: 991px) {
      left: 95%;
      transform: translateX(-95%) translateY(-50%);
    }
  }

  input::placeholder {
    color: #C1BEBE;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%) translateX(-3%);
    @media screen and (min-width: 991px) {
      display: none;
    }
  }
}
</style>