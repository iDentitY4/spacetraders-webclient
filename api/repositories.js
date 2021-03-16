import ships from './ships'
import loans from './loans'
import systems from './systems'
import user from './user'

export default (api, ctx) => ({
  ships: ships(api, ctx),
  loans: loans(api, ctx),
  systems: systems(api, ctx),
  user: user(api, ctx),
})
