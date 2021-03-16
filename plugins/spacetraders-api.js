import createRepositories from '~/api/repositories.js'

export default (ctx, inject) => {
  const api = ctx.$axios.create({
    // headers: {
    //   Authorization: `Bearer ${apiToken}`,
    // },
  })

  api.onRequest((config) => {
    const apiToken = ctx.store.getters['user/apiToken']
    if (apiToken) {
      config.headers.Authorization = `Bearer ${apiToken}`
    }
  })

  api.setBaseURL('https://api.spacetraders.io')

  const repositories = createRepositories(api, ctx)

  inject('repositories', repositories)
}
