<script setup>
import router from '../../router'
</script>
<template>
  <v-card class="error-card-container" variant="outlined">
    <div class="error-card-content">
      <h1>Error 404</h1>
      <span>Sayfa bulunamadı...</span>
      <v-btn class="error-card-content-button" @click="router.push({ path: '/' })">Ana Sayfa</v-btn>
    </div>
    <div class="error-card-image">
      <img src="../assets/images/error-page.png" alt="Hata!" />
    </div>
  </v-card>
</template>
<style scoped>
.error-card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 5%;
  border: 2px solid #fa4454;
  border-radius: 20px;
  height: 625px;
  width: auto;
  font-family: 'Poppins';
}

.error-card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.error-card-content-button {
  background-color: #fa4454;
  color: #ffffff;
  height: 60px;
  min-width: 400px;
}
</style>
