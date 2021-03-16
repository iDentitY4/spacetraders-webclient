<template>
  <div class="container max-w-full mx-auto py-24 px-6">
    <div class="font-sans">
      <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
          <div class="w-full relative">
            <div class="mt-6">
              <div class="text-5xl font-semibold text-center">
                <nuxt-link
                  to="/login"
                  class="text-white"
                  active-class=""
                  exact-active-class=""
                >
                  <span class="text-blue-500">Space</span>Traders
                </nuxt-link>
              </div>

              <form
                v-if="!apiToken"
                method="post"
                class="mt-8"
                @submit.prevent="registerUser()"
              >
                <div class="mx-auto max-w-lg">
                  <div class="py-2">
                    <span class="px-1 text-lg text-gray-500">Username</span>
                    <input
                      v-model="createUsername"
                      placeholder="AwesomeTrader123"
                      type="text"
                      class="text-xl block px-3 py-2 rounded-lg w-full bg-gray-800 border-2 border-gray-500 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-gray-900 focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div v-if="error" class="py-1 text-red-500">
                    {{ errorMessage }}
                  </div>
                  <button
                    class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block flex justify-center shadow-xl hover:text-white hover:bg-blue-700 disabled:opacity-50"
                    type="submit"
                    :disabled="!createUsername || loading"
                  >
                    <span v-if="!loading">Create user</span>
                    <svg
                      v-else
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </button>
                  <div class="mt-3 flex justify-center">
                    <nuxt-link to="/login" class="text-sm underline"
                      >Login with existing account</nuxt-link
                    >
                  </div>
                </div>
              </form>
              <div v-else class="py-4 flex flex-col justify-center text-center">
                <div class="text-3xl font-semibold">
                  {{ username }}
                </div>
                <div class="pt-3">
                  <div class="text-lg font-semibold">Your API Token</div>
                </div>
                <div
                  class="py-3 rounded-xl bg-blue-900 text-gray-200 font-semibold"
                >
                  {{ apiToken }}
                </div>
                <div class="pb-3 text-gray-400 font-semibold">
                  Please store your username and API Token in a secure place
                </div>
                <nuxt-link
                  to="/"
                  class="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block flex justify-center shadow-xl hover:text-white hover:bg-blue-700"
                  >Continue</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'auth',
  middleware({ store, redirect }) {
    if (store.getters['user/username'] && store.getters['user/apiToken']) {
      return redirect('/')
    }
  },
  data() {
    return {
      createUsername: '',
      loading: false,
      error: false,
      errorMessage: 'Could not create user',
    }
  },
  computed: {
    ...mapGetters('user', ['username', 'apiToken']),
  },
  methods: {
    async registerUser() {
      this.loading = true
      try {
        await this.$store.dispatch('user/register', {
          username: this.createUsername,
        })
      } catch (e) {
        this.error = true
        if (e.response) {
          const { data } = e.response

          if (data.error) {
            this.errorMessage = data.error.message
          }
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style></style>
