export const state = () => ({
  availableShips: [],
  myShips: [],
})

export const mutations = {
  SET_AVAILABLE_SHIPS(state, availableShips) {
    state.availableShips = availableShips
  },
  SET_MY_SHIPS(state, myShips) {
    state.myShips = myShips
  },
}

export const actions = {
  async getAvailableShips({ commit }) {
    try {
      const { ships } = await this.$repositories.ships.availableShips()
      commit('SET_AVAILABLE_SHIPS', ships)
    } catch (e) {
      console.error('Could not fetch available ships')
      console.error(e)
    }
  },
  async getMyShips({ commit }) {
    try {
      const { ships } = await this.$repositories.ships.myShips()
      commit('SET_MY_SHIPS', ships)
    } catch (e) {
      console.error('Could not fetch my ships')
      console.error(e)
    }
  },
  async buyShip({ commit, dispatch }, { location, type }) {
    try {
      console.log(location, type)
      const { user } = await this.$repositories.ships.buy(location, type)
      commit('SET_MY_SHIPS', user.ships)
      await dispatch('user/getUserInfo', null, { root: true })
    } catch (e) {
      console.error('Could not buy ship')
      console.error(e)
    }
  },
}

export const getters = {
  availableShips: (state) => {
    return state.availableShips
  },
  myShips: (state) => {
    return state.myShips
  },
}
