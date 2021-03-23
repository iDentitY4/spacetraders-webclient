export default (api, ctx) => ({
  async index() {
    return await api.$get(`/game/systems`)
  },
})
