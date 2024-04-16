
<template>
  <main class="default-template">
    <AppHeader />
    <slot></slot>
    <AppFooter />
  </main>
</template>
<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
</script>
<style lang="scss" scoped>
.default-template {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}
</style>
