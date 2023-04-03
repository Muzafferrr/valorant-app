import { defineStore } from 'pinia'
import router from '../router'

export const useAgents = defineStore('agents', {
  state: () => {
    return {
      _agents: [],
      _savedAgentIds: []
    }
  },
  getters: {
    agents: async (state) => state._agents,
    savedAgentIds: async (state) => state._savedAgentIds
  },
  actions: {
    async fetchAgents() {
      var response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
      try {
        const result = await response.json()
        this._agents = await result.data.map((item) => {
          return {
            isSaved: this.$state._savedAgentIds.includes(item.uuid) ? true : false,
            uuid: item.uuid,
            displayName: item.displayName,
            description: item.description,
            fullPortrait: item.fullPortrait,
            killfeedPortrait: item.killfeedPortrait
          }
        })
      } catch (error) {
        router.push({ path: '/error' })
      }
    },
    async getSavedAgents() {
      return this._agents
        .filter((x) => this._savedAgents.includes(x.uuid))
        .map((item) => {
          return {
            text: item.displayName,
            value: item.uuid
          }
        })
    },
    async putSavedItem(id) {
      if (id == '' || id == null || id == undefined) {
        alert('Please select an agent')
        return
      }
      let agent = this._agents.find((x) => x.uuid == id)
      if (!this.$state._savedAgentIds.includes(id)) {
        this.$state._savedAgentIds.push(id)
        agent.isSaved = true
      }
    },
    async removeSavedItem(id) {
      if (id == '' || id == null || id == undefined) {
        alert('Please select an agent')
        return
      }
      let agent = this._agents.find((x) => x.uuid == id)
      let index = this._savedAgentIds.indexOf(id)
      this.$state._savedAgentIds.splice(index, 1)
      agent.isSaved = false
    }
  }
})
