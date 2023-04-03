<script setup>
import { useAgents } from '../../stores/agents'
import { ref } from 'vue'

const agentStore = useAgents()
const dialog = ref(false)
const selectedAutoComplete = ref('')

async function saveSelectedItem(id) {
  await agentStore.putSavedItem(id)
  selectedAutoComplete.value = ''
  dialog.value = false
}
</script>
<template>
  <v-row class="mb-4">
    <v-dialog v-model="dialog" persistent width="400">
      <template v-slot:activator="{ props }">
        <v-btn color="red" v-bind="props">Kaydedilenler Ekle</v-btn>
      </template>
      <v-card>
        <v-card-title class="card-header">
          <span>Kaydedilenler Ekle</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-autocomplete
                  clearable
                  variant="underlined"
                  label="Save an agent"
                  :items="
                    agentStore._agents
                      .filter((x) => !agentStore._savedAgentIds.includes(x.uuid))
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
                  v-model="selectedAutoComplete"
                >
                  <template v-slot:item="{ props, item }">
                    <v-list-item
                      v-bind="props"
                      :prepend-avatar="item.raw.image"
                      :title="item.raw.text"
                    ></v-list-item>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Close </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="saveSelectedItem(selectedAutoComplete)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style scoped>
.card-header {
  background: #dc3d4b;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: #fafafa;
}
</style>
