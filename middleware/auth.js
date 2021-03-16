export default function ({ store, redirect }) {
  // If the user is not authenticated
  console.log('checking auth')
  if (!store.getters['user/username'] || !store.getters['user/apiToken']) {
    return redirect('/login')
  }
}
