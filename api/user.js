export default (api, { store }) => ({
  info() {
    const username = store.getters['user/username']
    return api.$get(`/users/${username}`)
  },
  register(username) {
    return api.$post(`/users/${username}/token`)
  },
})
