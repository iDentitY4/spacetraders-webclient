export default (api, { store }) => ({
  async availableShips() {
    return await api.$get(`/game/ships`)
  },

  async myShips() {
    const username = store.getters['user/username']
    return await api.$get(`users/${username}/ships`)
  },

  async buy(location, type) {
    const username = store.getters['user/username']
    return await api.$post(`/users/${username}/ships`, { location, type })
  },

  async view(id) {
    const username = store.getters['user/username']
    return await api.$get(`/users/${username}/ships/${id}`)
  },

  // update(payload, id) {
  //   return $axios.$put(`/${resource}/${id}`, payload)
  // },

  async sell(id) {
    const username = store.getters['user/username']
    return await api.$delete(`/users/${username}/ships/${id}`)
  },
})
