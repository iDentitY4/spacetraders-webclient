export const state = () => ({
  systems: [],
})

export const mutations = {
  SET_SYSTEMS(state, systems) {
    state.systems = systems
  },
}

export const actions = {
  async getSystems({ commit }) {
    try {
      const { systems } = await this.$repositories.systems.index()
      commit('SET_SYSTEMS', systems)
    } catch (e) {
      console.error('Could not fetch systems')
      console.error(e)
    }
  },
}

export const getters = {
  systems: (state) => {
    return state.systems
  },
}
