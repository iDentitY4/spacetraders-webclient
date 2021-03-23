export default (api, { store }) => ({
  async availableLoans() {
    return await api.$get(`/game/loans`)
  },

  async myLoans() {
    const username = store.getters['user/username']
    return await api.$get(`/users/${username}/loans`)
  },

  async requestNew(type) {
    const username = store.getters['user/username']
    try {
      return await api.$post(`/users/${username}/loans`, { type })
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        switch (status) {
          case 422:
            throw new Error('Only one loan allowed.')
          default:
            throw new Error('Something went wrong')
        }
      } else {
        throw error
      }
    }
  },

  async view(id) {
    const username = store.getters['user/username']
    return await api.$get(`/users/${username}/loans/${id}`)
  },

  async pay(id) {
    const username = store.getters['user/username']
    return await api.$put(`/users/${username}/loans/${id}`)
  },
})
