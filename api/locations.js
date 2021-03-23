export default (api, { store }) => ({
  async info(symbol) {
    return await api.$get(`/game/locations/${symbol}`)
  },

  async ships(symbol) {
    return await api.$get(`game/locations/${symbol}/ships`)
  },

  async locationsInSystem(symbol) {
    return await api.$get(`game/systems/${symbol}/locations`)
  },

  async marketplace(symbol) {
    return await api.$get(`game/locations/${symbol}/marketplace`)
  },
})
