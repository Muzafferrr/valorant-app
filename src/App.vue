<script setup>
import TopBar from './components/general/TopBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TopBar />
  <RouterView class="router-area" />
</template>

<style scoped>
@font-face {
  font-family: 'Poppins';
  src: url('./assets/fonts/Poppins-Regular.ttf') format('truetype');
}

#app {
  font-family: 'Poppins';
}

.router-area {
  font-family: 'Poppins';
  margin-top: 150px;
  padding: 0 2%;
}
</style>
