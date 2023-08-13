<template>
  <div class="p-6 text-center">
    <form class="mt-2">
      <div class="mb-6">
        <label
          for="songName"
          class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Song Title</label
        >
        <input
          type="songName"
          v-model="songName"
          id="songName"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Iron Maiden - Seventh son of the seventh son"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="genre"
          class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Genre</label
        >
        <input
          type="genre"
          v-model="songGenre"
          id="genre"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Heavy metal"
          required
        />
      </div>
      <div class="flex flex-col md:flex-row">
        <button
          type="submit"
          @click.prevent="closeModal"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Update
        </button>
        <!-- <button
          class="my-2 md:my-0 ml-0 md:ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Back
        </button> -->
      </div>
    </form>
  </div>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  methods: {
    closeModal() {
      console.log("closeModal");
      this.$emit("close-modal");
    },
  },
};
</script>
<style></style>
