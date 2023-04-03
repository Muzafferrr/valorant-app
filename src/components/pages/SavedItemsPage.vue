<script setup>
import AgentCard from '../agents/AgentCard.vue'
import { useAgents } from '../../stores/agents'
import router from '../../router'
const agentStore = useAgents()
function undoItem(id) {
  agentStore.removeSavedItem(id)
}
</script>
<template>
  <div>
    <p class="page-title">Kaydedilenler</p>
    <v-autocomplete
      class="search mt-2"
      clearable
      label="Kaydedilenler için arama yapin"
      :items="
        agentStore._agents
          .filter((x) => agentStore._savedAgentIds.includes(x.uuid))
          .map((item) => {
            return {
              text: item.displayName,
              value: item.uuid,
              image: item.killfeedPortrait
            }
          })
      "
      item-value="value"
      item-title="text"
    >
      <template v-slot:item="{ props, item }">
        <v-list-item
          v-bind="props"
          :prepend-avatar="item.raw.image"
          :title="item.raw.text"
          @click="router.push('/agent/' + item.raw.value)"
        ></v-list-item>
      </template>
    </v-autocomplete>
    <v-row class="mt-2">
      <v-col
        v-for="item in agentStore._agents.filter((x) => x.isSaved)"
        :key="item"
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="12"
      >
        <AgentCard :agent="item" :undo-save="undoItem" />
      </v-col>
    </v-row>
  </div>
</template>
<style scoped>
.page-title {
  font-weight: 500;
  font-size: 36px;
  color: #444444;
}

.search {
  border: 3px solid #333333;
  border-radius: 5px;
  height: 60px;
  max-width: 400px !important;
}
</style>
