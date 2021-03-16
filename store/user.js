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
  async register({ commit }, { username }) {
    try {
      const { token, user } = await this.$repositories.user.register(username)
      commit('SET_API_TOKEN', token)
      commit('SET_USERNAME', user.username)
      commit('SET_CREDITS', user.credits)
    } catch (e) {
      console.error(`Could not register username ${username}`)
      console.error(e)
      throw e
    }
  },
  login({ commit }, { username, apiToken }) {
    commit('SET_USERNAME', username)
    commit('SET_API_TOKEN', apiToken)
  },
  logout({ commit }) {
    commit('SET_USERNAME', null)
    commit('SET_API_TOKEN', null)
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
