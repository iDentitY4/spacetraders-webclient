export default (api, { store }) => ({
  info(symbol) {
    return api.$get(`/game/locations/${symbol}`)
  },

  ships(symbol) {
    return api.$get(`game/locations/${symbol}/ships`)
  },

  locationsInSystem(symbol) {
    return api.$get(`game/systems/${symbol}/locations`)
  },

  marketplace(symbol) {
    return api.$get(`game/locations/${symbol}/marketplace`)
  },
})
