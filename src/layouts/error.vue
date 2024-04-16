
<template>
  <main class="error-template">
    <AppHeader />
    <div class="error-wrapper text-center flex-1 py-8 px-10">
      <h1 class="text-2xl text-slate-500 mb-16">
        Não foi possível encontrar esta página<br class="hidden lg:block"/>
        ou o pokemon que você tentou acessar nåo existe.
        <br/>
        <br/>
        Use a pesquisa na página inicial para pesquisar os pokemons
      </h1>
      <NuxtLink
        to="/"
        class="text-white bg-slate-800 hover:bg-slate-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-700 focus:outline-none focus:ring-blue-800"
      >
        Voltar para o início
      </NuxtLink>
    </div>
    <AppFooter />
  </main>
</template>
<script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
</script>
<style lang="scss" scoped>
.error-template {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  .error-wrapper {
    min-height: 80vh;
  }
}
</style>
