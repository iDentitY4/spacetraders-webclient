<template>
  <div class="container max-w-full mx-auto py-24 px-6">
    <div class="font-sans">
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-6">
              <div class="text-5xl font-semibold text-center">
                <nuxt-link to="/" active-class="" exact-active-class="">
                  <span class="text-blue-500">Space</span>Traders
                </nuxt-link>
              </div>

              <form method="post" class="mt-8" @submit.prevent="login()">
                <div class="mx-auto max-w-lg">
                  <div class="py-2">
                    <span class="px-1 text-lg text-gray-500">Username</span>
                    <input
                      v-model="username"
                      placeholder=""
                      type="text"
                      class="text-xl block px-3 py-2 rounded-lg w-full bg-gray-800 border-2 border-gray-500 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-gray-900 focus:border-gray-600 focus:outline-none"
                    />
                  </div>
                  <div class="py-2">
                    <span class="px-1 text-lg text-gray-600">API-Token</span>
                    <div class="relative">
                      <input
                        v-model="apiToken"
                        placeholder=""
                        type="password"
                        class="text-xl block px-3 py-2 rounded-lg w-full bg-gray-800 border-2 border-gray-500 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-gray-900 focus:border-gray-600 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
                    type="submit"
                    :disabled="!username || !apiToken"
                  >
                    Start trading
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  middleware({ store, redirect }) {
    if (store.getters['user/username'] && store.getters['user/apiToken']) {
      return redirect('/')
    }
  },
  data() {
    return {
      username: '',
      apiToken: '',
    }
  },
  methods: {
    async login() {
      console.log('login')
      await this.$store.dispatch('user/login', {
        username: this.username,
        apiToken: this.apiToken,
      })
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
