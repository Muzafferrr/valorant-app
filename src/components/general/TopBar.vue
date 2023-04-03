<script setup>
import { RouterLink } from 'vue-router'
import router from '../../router'
import { useAgents } from '../../stores/agents'
const agentStore = useAgents()
</script>
<template>
  <v-layout>
    <v-app-bar class="topbar">
      <v-app-bar-title @click="router.push('/')" class="topbar-title">VMW</v-app-bar-title>
      <v-spacer></v-spacer>
      <RouterLink class="router-link" to="/">Ana Sayfa</RouterLink>
      <RouterLink class="router-link" to="/saved-items">Kaydedilenler</RouterLink>
      <v-autocomplete
        class="search mt-2"
        clearable
        label="Ajan ve kaydedilenler için arama yapin"
        :items="
          agentStore._agents
            .map((item) => {
              return {
                text: item.displayName,
                value: item.uuid,
                image: item.killfeedPortrait,
                route: `/agent/${item.uuid}`
              }
            })
            .concat(
              agentStore._agents
                .filter((x) => agentStore._savedAgentIds.includes(x.uuid))
                .map((savedItems) => {
                  return {
                    text: `${savedItems.displayName} (saved)`,
                    value: savedItems.uuid,
                    image: savedItems.killfeedPortrait,
                    route: `/saved-items`
                  }
                })
            )
        "
        item-value="value"
        item-title="text"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item
            v-bind="props"
            :prepend-avatar="item.raw.image"
            :title="item.raw.text"
            @click="router.push(item.raw.route)"
          ></v-list-item>
        </template>
      </v-autocomplete>
    </v-app-bar>
  </v-layout>
</template>
<style scoped>
@font-face {
  font-family: 'VALORANT';
  src: url('../../assets/fonts/valorant.ttf') format('truetype');
}

.topbar {
  background: #dc3d4b;
  height: 96px;
  display: flex;
  flex-direction: row;
  padding: 0 2%;
  align-items: center !important;
}

.topbar-title {
  font-family: 'VALORANT';
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  color: #fafafa;
  cursor: pointer;
}

.search {
  background-color: #dc3d4b !important;
  color: #fafafa;
  border: 3px solid #fafafa;
  border-radius: 5px;
  height: 60px;
}

.router-link {
  text-decoration: none;
  color: #fafafa;
  margin-right: 1%;
}
</style>
