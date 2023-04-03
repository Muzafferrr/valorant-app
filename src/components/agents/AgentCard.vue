<script setup>
import router from '../../router'
import { ref } from 'vue'

const showDetails = ref(false)
const props = defineProps({
  agent: {},
  saveItem: Function,
  undoSave: Function
})
function goAgentDetail(id) {
  router.push('/agent/' + id)
}
</script>
<template>
  <v-card class="card" @mouseover="showDetails = true" @mouseleave="showDetails = false">
    <v-card-title class="card-title text-center">{{ props.agent.displayName }}</v-card-title>
    <v-card-text class="text-center">
      <img class="card-image mx-auto" :src="props.agent.fullPortrait" />
    </v-card-text>
    <v-card class="card-detail" v-show="showDetails">
      <v-card-text class="card-detail-text">
        {{ props.agent.description.substring(0, 150) }}...
        <v-btn class="card-detail-button" @click="goAgentDetail(agent.uuid)">detay</v-btn>
      </v-card-text>
      <v-card-actions class="card-detail-actions">
        <v-btn
          class="card-button"
          density="compact"
          icon="mdi-check"
          v-if="!props.agent.isSaved"
          @click="saveItem(agent.uuid)"
        ></v-btn>
        <v-btn
          class="card-button"
          density="compact"
          icon="mdi-close"
          v-else
          @click="undoSave(agent.uuid)"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>
<style scoped>
.card {
  background-color: #dc3d4b;
  color: #fafafa;
  border-radius: 20px;
  height: 400px;
}

.card-title {
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
}

.card-image {
  max-width: 300px;
}

.card-button {
  border: 1.5px solid #ffffff;
  border-radius: 30%;
  margin-right: 15px;
}

.card-detail {
  position: absolute;
  width: auto;
  z-index: 999;
  height: 300px;
  left: 20px;
  right: 20px;
  top: 70px;
  background: rgba(55, 55, 55, 0.5);
  border-radius: 20px;
}

.card-detail-text {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 36px;
  color: #ffffff;
}

.card-detail-button {
  background-color: rgba(55, 55, 55, 0.5);
  border: 1.5px solid #ffffff;
  border-radius: 20px;
  color: #ffffff;
}

.card-detail-actions {
  position: absolute;
  bottom: 7px;
  right: 0;
  color: #ffffff;
}
</style>
