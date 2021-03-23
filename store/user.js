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
    const { user } = await this.$repositories.user.info()
    commit('SET_CREDITS', user.credits)
  },
  async register({ commit }, { username }) {
    const { token, user } = await this.$repositories.user.register(username)
    commit('SET_API_TOKEN', token)
    commit('SET_USERNAME', user.username)
    commit('SET_CREDITS', user.credits)
  },
  async login({ commit, dispatch }, { username, apiToken }) {
    commit('SET_USERNAME', username)
    commit('SET_API_TOKEN', apiToken)
    try {
      await dispatch('getUserInfo')
    } catch (error) {
      commit('SET_USERNAME', null)
      commit('SET_API_TOKEN', null)
      throw error
    }
  },
  logout({ commit }) {
    commit('SET_USERNAME', null)
    commit('SET_API_TOKEN', null)
    commit('SET_CREDITS', 0)
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
