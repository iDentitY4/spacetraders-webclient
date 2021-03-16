import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  new VuexPersistence({
    storage: window.localStorage,
    reducer: (state) => ({ user: state.user }),
  }).plugin(store)
}
