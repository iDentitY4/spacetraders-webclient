import ships from './ships'
import loans from './loans'
import systems from './systems'

export default (api, ctx) => ({
  ships: ships(api, ctx),
  loans: loans(api, ctx),
  systems: systems(api, ctx),
})
