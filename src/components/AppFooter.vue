<template>
  <footer class="app-footer text-center py-16">
    <p class="text-slate-500">
      © {{ year }} Kotas Pokemon Challenge - All Rights Reserved<br/>
    </p>
  </footer>
</template>
<script setup>
const year = new Date().getFullYear();
</script>
<style>
.app-footer {
}
</style>
