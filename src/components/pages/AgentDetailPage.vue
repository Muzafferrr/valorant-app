<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import router from '../../router'
import { ref } from 'vue'

const agentDetail = ref({})
const agentDetailRole = ref({})
const route = useRoute()
onMounted(async () => {
  const agentId = route.params.id
  var response = await fetch('https://valorant-api.com/v1/agents/' + agentId)
  try {
    const result = await response.json()
    agentDetail.value = await result.data
    agentDetailRole.value = await result.data.role
  } catch (error) {
    router.push({ path: '/error' })
  }
})
</script>
<template>
  <h1>{{ agentDetail.displayName }} - {{ agentDetailRole.displayName }}</h1>
  <div class="detail-header">
    <img :src="agentDetail.displayIcon" width="250" />
    <span class="agent-description">{{ agentDetail.description }}</span>
  </div>
  <v-card class="abilities-container">
    <v-card-title>Abilities</v-card-title>
    <v-card-text class="abilities-content">
      <div v-for="ability in agentDetail.abilities" :key="ability.slot">
        {{ ability.displayName }}: {{ ability.description }}
      </div>
    </v-card-text>
  </v-card>
</template>
<style scoped>
.detail-header {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

.agent-description {
  max-width: 500px;
}

.abilities-container {
  background-color: #dc3d4b;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.abilities-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
