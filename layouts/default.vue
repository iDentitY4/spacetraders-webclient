<template>
  <div class="min-h-screen font-aliased bg-gray-900 text-white">
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 text-3xl font-semibold">
              <nuxt-link to="/" active-class="" exact-active-class="">
                <span class="text-blue-500">Space</span>Traders
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <nuxt-link
                  to="/"
                  class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </nuxt-link>

                <nuxt-link
                  to="/ships"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My ships
                </nuxt-link>

                <nuxt-link
                  to="/loans"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My loans
                </nuxt-link>

                <nuxt-link
                  to="/ships/shop"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Shop
                </nuxt-link>

                <nuxt-link
                  to="/systems"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Systems
                </nuxt-link>
              </div>
            </div>
          </div>
          <UserInfo />
        </div>
      </div>
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import UserInfo from '~/components/UserInfo.vue'

export default {
  components: { UserInfo },
}
</script>

<style>
.nuxt-link-exact-active {
  @apply bg-gray-900;
}
</style>
