<template>
  <header class="app-header bg-white flex items-center justify-center px-6">
    <div class="w-full flex items-center justify-center lg:justify-start">
      <NuxtLink to="/" class="logo">
        <AppLogo />
      </NuxtLink>
    </div>
  </header>
</template>
<script setup>
  import AppLogo from "~/components/AppLogo";
</script>
<style>
.app-header {
  box-shadow: 0px 1px 1px 0px #E1E1E1;
  background-color: #fff;
  height: 48px;
}
</style>
