export const state = () => ({
  availableLoans: [],
  myLoans: [],
})

export const mutations = {
  SET_AVAILABLE_LOANS(state, availableLoans) {
    state.availableLoans = availableLoans
  },
  SET_MY_LOANS(state, myLoans) {
    state.myLoans = myLoans
  },
}

export const actions = {
  async getAvailableLoans({ commit }) {
    try {
      const { loans } = await this.$repositories.loans.availableLoans()
      commit('SET_AVAILABLE_LOANS', loans)
    } catch (e) {
      console.error('Could not fetch available loans')
      console.error(e)
    }
  },
  async getMyLoans({ commit }) {
    try {
      const { loans } = await this.$repositories.loans.myLoans()
      commit('SET_MY_LOANS', loans)
    } catch (e) {
      console.error('Could not fetch my loans')
      console.error(e)
    }
  },
}

export const getters = {
  availableLoans: (state) => {
    return state.availableLoans
  },
  myLoans: (state) => {
    return state.myLoans
  },
}
