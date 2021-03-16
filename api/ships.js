export default (api, { store }) => ({
  availableShips() {
    return api.$get(`/game/ships`)
  },

  myShips() {
    const username = store.getters['user/username']
    return api.$get(`users/${username}/ships`)
  },

  buy(location, type) {
    const username = store.getters['user/username']
    return api.$post(`/users/${username}/ships`, { location, type })
  },

  view(id) {
    const username = store.getters['user/username']
    return api.$get(`/users/${username}/ships/${id}`)
  },

  // update(payload, id) {
  //   return $axios.$put(`/${resource}/${id}`, payload)
  // },

  sell(id) {
    const username = store.getters['user/username']
    return api.$delete(`/users/${username}/ships/${id}`)
  },
})
