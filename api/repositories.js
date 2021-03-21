import ships from './ships'
import loans from './loans'
import systems from './systems'
import user from './user'
import locations from './locations'

export default (api, ctx) => ({
  ships: ships(api, ctx),
  loans: loans(api, ctx),
  systems: systems(api, ctx),
  locations: locations(api, ctx),
  user: user(api, ctx),
})
