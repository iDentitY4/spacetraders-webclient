export default (api, { store }) => ({
  availableLoans() {
    return api.$get(`/game/loans`)
  },

  myLoans() {
    const username = store.getters['user/username']
    return api.$get(`/users/${username}/loans`)
  },

  requestNew(type) {
    const username = store.getters['user/username']
    return api.$post(`/users/${username}/loans`, { type })
  },

  view(id) {
    const username = store.getters['user/username']
    return api.$get(`/users/${username}/loans/${id}`)
  },

  pay(id) {
    const username = store.getters['user/username']
    return api.$put(`/users/${username}/loans/${id}`)
  },
})
