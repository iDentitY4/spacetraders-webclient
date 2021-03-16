export default (api, ctx) => ({
  index() {
    return api.$get(`/game/systems`)
  },
})
