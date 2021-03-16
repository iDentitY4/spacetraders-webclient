<template>
  <div class="flex flex-col m-6">
    <div class="text-2xl font-semibold text-gray-200">Available Loans</div>
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-600 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-600">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Payback Rate
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Loan term
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Collateral required
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-gray-800 divide-y divide-gray-600">
              <tr v-for="(loan, i) in availableLoans" :key="i">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-2">
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
                    <div class="text-3xl font-semibold text-white">
                      {{ loan.amount.toLocaleString() }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center space-x-2">
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
                    <div class="text-3xl font-semibold text-white">
                      {{ loan.rate.toLocaleString() }}
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-3xl font-semibold text-white">
                    {{ loan.termInDays.toLocaleString() }} days
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-3xl font-semibold text-white">
                    {{ loan.collateralRequired ? 'Yes' : 'No' }}
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
                >
                  <a
                    href="#"
                    class="text-xl text-indigo-300 hover:text-indigo-400"
                    >Request</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('loans/getAvailableLoans')
    await store.dispatch('loans/getMyLoans')
  },
  computed: {
    ...mapGetters('loans', ['availableLoans', 'myLoans']),
  },
}
</script>

<style></style>
