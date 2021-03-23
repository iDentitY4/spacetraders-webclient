export default (api, { store }) => ({
  async info() {
    const username = store.getters['user/username']

    try {
      return await api.$get(`/users/${username}`)
    } catch (error) {
      if (error.response) {
        const status = error.response.status

        switch (status) {
          case 401:
            throw new Error('Invalid username and API-Token combination')
          case 404:
            throw new Error('Unkown username')
          default:
            throw new Error('Something went wrong')
        }
      } else {
        throw error
      }
    }
  },
  async register(username) {
    return await api.$post(`/users/${username}/token`)
  },
})
