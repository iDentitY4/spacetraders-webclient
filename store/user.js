export const state = () => ({
  username: null,
  apiToken: null,
  credits: 0,
})

export const mutations = {
  SET_USERNAME(state, username) {
    state.username = username
  },
  SET_API_TOKEN(state, apiToken) {
    state.apiToken = apiToken
  },
  SET_CREDITS(state, credits) {
    state.credits = credits
  },
}

export const actions = {
  async getUserInfo({ commit }) {
    try {
      const { user } = await this.$repositories.user.info()
      commit('SET_CREDITS', user.credits)
    } catch (e) {
      console.error('Could not fetch user info')
      console.error(e)
    }
  },
  login({ commit }, { username, apiToken }) {
    commit('SET_USERNAME', username)
    commit('SET_API_TOKEN', apiToken)
  },
}

export const getters = {
  username: (state) => {
    return state.username
  },
  apiToken: (state) => {
    return state.apiToken
  },
  credits: (state) => {
    return state.credits
  },
}
