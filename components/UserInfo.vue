<template>
  <div class="inline-flex items-center p-4">
    <div class="relative" @keydown.esc="dropdownToggle = false">
      <button
        class="text-xl font-semibold focus:border-0"
        @click="dropdownToggle = !dropdownToggle"
      >
        {{ username }}
      </button>
      <div
        v-if="dropdownToggle"
        class="origin-top-right absolute right-0 mt-2 w-48 flex rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu"
      >
        <button
          class="flex-grow flex items-center px-4 py-2 text-md font-semibold text-white hover:bg-gray-800"
          role="menuitem"
          @click="logout()"
        >
          <svg
            class="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            ></path>
          </svg>
          Logout
        </button>
      </div>
    </div>
    <div class="inline-flex items-center pl-3 space-x-1">
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <div class="text-2xl font-semibold">{{ formattedCredits }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      dropdownToggle: false,
    }
  },
  computed: {
    ...mapGetters('user', ['username', 'credits']),
    formattedCredits() {
      return this.credits.toLocaleString()
    },
  },
  mounted() {
    this.$store.dispatch('user/getUserInfo')
    document.addEventListener('click', this.closeDropdown)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    },
    closeDropdown(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownToggle = false
      }
    },
  },
}
</script>

<style></style>
