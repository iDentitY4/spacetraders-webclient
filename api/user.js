export default (api, { store }) => ({
  info() {
    const username = store.getters['user/username']
    return api.$get(`users/${username}`)
  },
})
