export default function ({ store, route, redirect }) {
  if (route.path.includes('login') || route.path.includes('register')) {
    return
  }

  if (!store.getters['user/username'] || !store.getters['user/apiToken']) {
    return redirect('/login')
  }
}
