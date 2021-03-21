export const state = () => ({
  location: null,
  dockedShipsCount: 0,
  dockedShips: [],
  marketplace: [],
})

export const mutations = {
  SET_LOCATION(state, location) {
    state.location = location
  },
  SET_DOCKED_SHIPS_COUNT(state, dockedShipsCount) {
    state.dockedShipsCount = dockedShipsCount
  },
  SET_DOCKED_SHIPS(state, dockedShips) {
    state.dockedShips = dockedShips
  },
  SET_MARKETPLACE(state, marketplace) {
    state.marketplace = marketplace
  },
}

export const actions = {
  async getLocation({ commit }, { symbol }) {
    try {
      const { location, dockedShips } = await this.$repositories.locations.info(
        symbol
      )
      commit('SET_LOCATION', location)
      commit('SET_DOCKED_SHIPS_COUNT', dockedShips)
    } catch (e) {
      console.error('Could not fetch location info')
      console.error(e)
    }
  },
  async getDockedShips({ commit }, { symbol }) {
    try {
      const { location } = await this.$repositories.locations.ships(symbol)
      commit('SET_DOCKED_SHIPS', location.ships)
    } catch (e) {
      console.error('Could not fetch docked ships')
      console.error(e)
    }
  },
  async getMarketplace({ commit }, { symbol }) {
    try {
      const { location } = await this.$repositories.locations.marketplace(
        symbol
      )
      commit('SET_MARKETPLACE', location.marketplace)
    } catch (e) {
      console.error('Could not fetch marketplace')
      console.error(e)
    }
  },
}

export const getters = {
  location: (state) => {
    return state.location
  },
  dockedShipsCount: (state) => {
    return state.dockedShipsCount
  },
  dockedShips: (state) => {
    return state.dockedShips
  },
  marketplace: (state) => {
    return state.marketplace
  },
}
