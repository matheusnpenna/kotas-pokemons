
<template>
  <main class="default-template">
    <AppHeader />
    <div class="text-">
      <h1>{{ error.statusCode }}</h1>
      <NuxtLink to="/">
        Voltar para o início
      </NuxtLink>
    </div>
    <AppFooter />
  </main>
</template>
<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';

const props = defineProps({
  error: Object
})
</script>
<style lang="scss" scoped>
.default-template {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
}
</style>
